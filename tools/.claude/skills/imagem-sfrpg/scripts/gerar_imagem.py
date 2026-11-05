"""Gera imagens em estilo anime com a API de imagens da OpenAI (dois tipos).

Requer Pillow e OPENAI_API_KEY no .env de tools/ (a chave nunca é impressa). Rode a partir de tools/.

  python3 -I gerar_imagem.py personagem <saida> --personagem "<descrição em inglês>" [--acao "<pose>"] [--ref <img> ...]
      Fundo branco, 300px de largura e altura conforme o personagem/pose. A API não gera nesse tamanho:
      gera em 1024x1536, recorta o branco em volta do personagem e reduz para 300px de largura.

  python3 -I gerar_imagem.py cena <saida> --cenario "<ambiente em inglês>" --acao "<o que fazem>"
          --personagem "<descrição em inglês>" [--personagem ...] [--ref <img> ...] [--ref-cenario <img> ...]
      Horizontal em HD, sempre 1280x720.

Opções comuns:
  --ref            imagem de personagem, na mesma ordem dos --personagem (uma por personagem)
  --ref-cenario    imagem do ambiente (ex.: a arena no post do personagem); só em cena
  --mostrar-prompt só imprime o prompt, sem chamar a API (não gasta créditos)
  --de-original    refaz o recorte/tamanho a partir de um PNG já gerado, sem chamar a API
  --model, --quality, --env

Guarda sempre o PNG da API ao lado da saída (<saida>-original.png).
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

from PIL import Image, ImageChops, ImageOps

TAMANHO_API = {"personagem": "1024x1536", "cena": "1280x720"}
LARGURA_PERSONAGEM = 300
CENA = (1280, 720)
ALTURA_MAX_POR_LARGURA = 2  # personagem estreito: mantém branco nas laterais em vez de virar uma tira altíssima
ESTILO = "Anime illustration, 90s fighting game anime look, cel-shaded, vibrant colors"
FINAL = "No text, no logos, no watermark."


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


def texto_referencias(a):
    n, k = len(a.ref), len(a.ref_cenario)
    if not n + k:
        return ""
    t = (" Use every reference image only as a design guide: completely redraw everything from scratch in the same "
         "high-quality anime style, lighting and perspective of this image, whatever the style of the reference. "
         "Never paste, trace or copy the reference drawings into the image.")
    if n and a.tipo == "cena":
        t += f" The first {n} reference image(s) show the appearance, outfit and colors of the characters, in the order listed."
    elif n:
        t += " The reference image(s) show the character's appearance, outfit and colors."
    if k:
        t += (f" The last {k} reference image(s) show only the setting: follow its environment and do not "
              "reproduce any person who appears in it.")
    return t


def montar_prompt(a):
    if a.tipo == "personagem":
        acao = a.acao or "standing in a confident fighting stance"
        return (f"{ESTILO}. Vertical composition of a single character: {a.personagem[0]}; {acao}. "
                "Full body: the entire character, from head to toes and including any weapon, stays inside the frame, "
                "as large as possible, with a small white margin on all sides. Background: pure solid white (#FFFFFF), "
                f"with no scenery, no floor, no cast shadow and no gradient. {FINAL}{texto_referencias(a)}")
    return (f"{ESTILO}, detailed background, wide 16:9 landscape composition, HD resolution 1280x720, "
            f"every character fully inside the frame. Setting: {a.cenario}. Characters in the scene: "
            f"{'; '.join(a.personagem)}. What they are doing: {a.acao}. {FINAL}{texto_referencias(a)}")


def ajustar_personagem(im):
    """Recorta em volta do personagem e deixa com 300px de largura, sobre branco puro."""
    w, h = im.size
    if min(min(im.getpixel(p)) for p in ((0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1))) < 240:
        print("AVISO: o fundo não veio branco; confira a imagem.")
    im = im.point(lambda v: 255 if v >= 248 else v)  # o modelo costuma devolver um branco levemente sujo
    caixa = ImageChops.difference(im, Image.new("RGB", im.size, "white")).convert("L").point(
        lambda v: 255 if v > 10 else 0).getbbox()
    if not caixa:
        sys.exit("A imagem veio toda branca.")
    x0, y0, x1, y1 = caixa
    if x0 <= 2 or y0 <= 2 or x1 >= w - 2 or y1 >= h - 2:
        print("AVISO: o personagem encosta na borda da imagem e pode ter sido cortado; confira.")
    margem = round(max(x1 - x0, y1 - y0) * 0.02)
    alt = y1 - y0 + 2 * margem
    larg = max(x1 - x0 + 2 * margem, round(alt / ALTURA_MAX_POR_LARGURA))
    # A borda branca extra garante que recorte e margem nunca saiam da imagem.
    pad = max(w, h)
    tela = ImageOps.expand(im, border=pad, fill="white")
    cx, cy = (x0 + x1) // 2 + pad, (y0 + y1) // 2 + pad
    rec = tela.crop((cx - larg // 2, cy - alt // 2, cx - larg // 2 + larg, cy - alt // 2 + alt))
    return rec.resize((LARGURA_PERSONAGEM, round(alt * LARGURA_PERSONAGEM / larg)), Image.LANCZOS)


def ajustar_cena(im):
    if im.size[0] * 9 != im.size[1] * 16:
        print(f"AVISO: a API devolveu {im.size}, fora de 16:9; a imagem foi cortada no centro. Confira o enquadramento.")
    return ImageOps.fit(im, CENA, Image.LANCZOS)


ap = argparse.ArgumentParser()
ap.add_argument("tipo", choices=["personagem", "cena"])
ap.add_argument("saida")
ap.add_argument("--personagem", action="append", default=[])
ap.add_argument("--acao")
ap.add_argument("--cenario")
ap.add_argument("--ref", action="append", default=[])
ap.add_argument("--ref-cenario", action="append", default=[])
ap.add_argument("--mostrar-prompt", action="store_true")
ap.add_argument("--de-original")
ap.add_argument("--model", default="gpt-image-2")
ap.add_argument("--quality", default="high")
ap.add_argument("--env", default=".env")
a = ap.parse_args()

if a.tipo == "cena" and not (a.cenario and a.acao):
    ap.error("cena exige --cenario e --acao")
if a.tipo == "personagem" and (a.cenario or a.ref_cenario or len(a.personagem) > 1):
    ap.error("personagem vertical é um só --personagem, sem --cenario/--ref-cenario (o fundo é sempre branco)")
if not a.personagem and not a.de_original:
    ap.error("informe --personagem")

if a.de_original:
    im = Image.open(a.de_original).convert("RGB")
    uso = {}
else:
    prompt = montar_prompt(a)
    if a.mostrar_prompt:
        sys.exit(print(prompt))
    key = envget(a.env, "OPENAI_API_KEY")
    campos = {"model": a.model, "prompt": prompt, "size": TAMANHO_API[a.tipo], "quality": a.quality}
    refs = a.ref + a.ref_cenario
    if refs:
        corpo, ct = multipart(campos, [("image[]", r) for r in refs])
        resp = chamar("https://api.openai.com/v1/images/edits", key, corpo, ct)
    else:
        resp = chamar("https://api.openai.com/v1/images/generations", key,
                      json.dumps(campos).encode(), "application/json")
    im = Image.open(io.BytesIO(base64.b64decode(resp["data"][0]["b64_json"]))).convert("RGB")
    im.save(f"{os.path.splitext(a.saida)[0]}-original.png")  # já foi pago: guarda antes de qualquer ajuste
    uso = resp.get("usage", {})

final = ajustar_personagem(im) if a.tipo == "personagem" else ajustar_cena(im)
final.save(a.saida, quality=90)
print("ok", a.saida, final.size, "uso:", json.dumps(uso))
