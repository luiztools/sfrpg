"""Gera a imagem de arena de um personagem com a API de imagens da OpenAI.

Requer Pillow (mesmo venv do img.py) e OPENAI_API_KEY no .env de tools/ (a chave nunca é impressa).

  python3 -I gerar_imagem.py <saida.jpg> --cenario "<arena em inglês>" --personagem "<aparência em inglês>"
          [--ref <imagem do personagem> ...] [--model gpt-image-2] [--quality high] [--size 1280x720] [--env .env]

- Monta o prompt no estilo padrão (anime, 90s fighting game, personagem na arena fazendo sua pose de luta).
- Com --ref, usa /v1/images/edits e a(s) imagem(ns) como referência da aparência; sem --ref, /v1/images/generations.
- Gera direto em HD 1280x720 (16:9), sem recorte. Guarda também o PNG original ao lado (<saida>-original.png).
  Se a API devolver outra proporção, corta no centro para 16:9 (use --sem-corte para manter a imagem inteira).
Depois, converta com img.py banner e siga o fluxo normal de upload/anexo.
"""
import argparse
import base64
import io
import json
import mimetypes
import os
import sys
import urllib.error
import urllib.request
import uuid

from PIL import Image

ESTILO = ("Anime illustration, 90s fighting game anime look, cel-shaded, vibrant colors, detailed background, "
          "wide 16:9 landscape composition, HD resolution 1280x720, the whole character fits inside the frame")


def envget(path, key):
    for line in open(path, encoding="utf-8"):
        if line.startswith(key + "="):
            return line.split("=", 1)[1].strip().strip("\"'")
    sys.exit(f"{key} não encontrado em {path}")


def chamar(url, key, body, content_type):
    req = urllib.request.Request(url, data=body, method="POST",
                                 headers={"Authorization": f"Bearer {key}", "Content-Type": content_type})
    try:
        with urllib.request.urlopen(req, timeout=600) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        sys.exit(f"Erro da API ({e.code}): {e.read().decode(errors='replace')}")


def multipart(campos, arquivos):
    b = uuid.uuid4().hex
    partes = []
    for k, v in campos.items():
        partes.append(f'--{b}\r\nContent-Disposition: form-data; name="{k}"\r\n\r\n{v}\r\n'.encode())
    for k, caminho in arquivos:
        mime = mimetypes.guess_type(caminho)[0] or "image/png"
        partes.append(f'--{b}\r\nContent-Disposition: form-data; name="{k}"; filename="{os.path.basename(caminho)}"\r\n'
                      f'Content-Type: {mime}\r\n\r\n'.encode() + open(caminho, "rb").read() + b"\r\n")
    partes.append(f"--{b}--\r\n".encode())
    return b"".join(partes), f"multipart/form-data; boundary={b}"


ap = argparse.ArgumentParser()
ap.add_argument("saida")
ap.add_argument("--cenario", required=True)
ap.add_argument("--personagem", required=True)
ap.add_argument("--ref", action="append", default=[])
ap.add_argument("--acao", default="full body, striking their signature fighting stance, confident and showing off",
                help="o que o(s) personagem(ns) fazem na cena (ex.: mestre ensinando o aluno)")
ap.add_argument("--model", default="gpt-image-2")
ap.add_argument("--quality", default="high")
ap.add_argument("--size", default="1280x720")
ap.add_argument("--env", default=".env")
ap.add_argument("--sem-corte", action="store_true", help="mantém 1536x1024 (3:2), sem cortar para 16:9")
a = ap.parse_args()

prompt = (f"{ESTILO}. The arena: {a.cenario}. In the arena: {a.personagem}; {a.acao}. "
          "No text, no logos, no watermark.")
if a.ref:
    prompt += (" Use the reference images only as a design guide for each character's appearance, outfit and colors: "
               "completely redraw every character from scratch in the same high-quality anime style, lighting and "
               "perspective as the scene. Never paste, trace or copy the old reference drawings into the image.")
key = envget(a.env, "OPENAI_API_KEY")
campos = {"model": a.model, "prompt": prompt, "size": a.size, "quality": a.quality, "n": "1"}

if a.ref:
    corpo, ct = multipart(campos, [("image[]", r) for r in a.ref])
    resp = chamar("https://api.openai.com/v1/images/edits", key, corpo, ct)
else:
    resp = chamar("https://api.openai.com/v1/images/generations", key, json.dumps(campos).encode(), "application/json")

im = Image.open(io.BytesIO(base64.b64decode(resp["data"][0]["b64_json"]))).convert("RGB")
base = os.path.splitext(a.saida)[0]
im.save(f"{base}-original.png")
w, h = im.size
nh = h if a.sem_corte or w * 9 == h * 16 else w * 9 // 16
im.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh)).save(a.saida, quality=90)
print("ok", a.saida, (w, nh), "uso:", json.dumps(resp.get("usage", {})))
