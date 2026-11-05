"""Recorta o busto de um personagem em 3x4 (72x96), no padrão das tabelas de personagens. Não usa API.

Requer Pillow. Achar a cabeça é feito olhando a imagem, em dois passos:

  python3 -I recortar_busto.py grade <origem> <grade.png>
      Gera uma cópia da imagem com grade em porcentagem, para ler a posição da cabeça.

  python3 -I recortar_busto.py recortar <origem> <saida.jpg> --cabeca ESQ,TOPO,DIR,QUEIXO [--largura 72] [--folga 1.4]
      ESQ, TOPO, DIR e QUEIXO são porcentagens (0 a 100) da largura e da altura da imagem: a caixa da cabeça,
      do alto do cabelo (sem contar pontas soltas) até o queixo. --folga é a altura do quadro em relação
      à da cabeça: quanto maior, mais ombros e peito aparecem.
"""
import argparse
import sys

from PIL import Image, ImageDraw

LADO_GRADE = 1000
FOLGA_ACIMA = 0.04  # fração do quadro acima da cabeça


def abrir(caminho):
    im = Image.open(caminho)
    im.seek(0)  # GIF animado: primeiro quadro
    im = im.convert("RGBA")
    fundo = Image.new("RGBA", im.size, "white")  # imagens com transparência ficam sobre branco
    return Image.alpha_composite(fundo, im).convert("RGB")


def grade(origem, saida):
    im = abrir(origem)
    w, h = im.size
    esc = LADO_GRADE / max(w, h)
    im = im.resize((round(w * esc), round(h * esc)), Image.LANCZOS)
    w, h = im.size
    d = ImageDraw.Draw(im)
    for p in range(0, 101, 10):
        x, y = min(w * p // 100, w - 1), min(h * p // 100, h - 1)
        d.line((x, 0, x, h), fill=(255, 0, 255))
        d.line((0, y, w, y), fill=(255, 0, 255))
        for pos in ((x + 2, 2), (2, y + 2)):
            d.text(pos, str(p), fill="white", stroke_width=2, stroke_fill="black", font_size=16)
    im.save(saida)
    print("ok", saida)


def quadro(w, h, cabeca, folga):
    """Quadro 3x4 em pixels: centrado na cabeça, sempre dentro da imagem."""
    e, t, d, q = cabeca[0] * w / 100, cabeca[1] * h / 100, cabeca[2] * w / 100, cabeca[3] * h / 100
    alt = (q - t) * folga
    # A largura precisa caber a cabeça inteira; a imagem limita o tamanho do quadro.
    alt = min(max(alt, (d - e) * 4 / 3), h, w * 4 / 3)
    larg = alt * 3 / 4
    x = min(max((e + d - larg) / 2, 0), w - larg)
    y = min(max(t - alt * FOLGA_ACIMA, 0), h - alt)
    return round(x), round(y), round(x + larg), round(y + alt)


def recortar(origem, saida, cabeca, largura, folga):
    if not (0 <= cabeca[0] < cabeca[2] <= 100 and 0 <= cabeca[1] < cabeca[3] <= 100):
        sys.exit("--cabeca inválida: use ESQ,TOPO,DIR,QUEIXO em porcentagem, com ESQ<DIR e TOPO<QUEIXO.")
    im = abrir(origem)
    caixa = quadro(*im.size, cabeca, folga)
    final = (largura, largura * 4 // 3)
    if caixa[2] - caixa[0] < largura:
        print(f"AVISO: o recorte tem só {caixa[2] - caixa[0]}px de largura e foi ampliado; procure uma imagem maior.")
    im.crop(caixa).resize(final, Image.LANCZOS).save(saida, quality=92)
    print("ok", saida, final, "recorte na origem:", caixa)


ap = argparse.ArgumentParser()
ap.add_argument("modo", choices=["grade", "recortar"])
ap.add_argument("origem")
ap.add_argument("saida")
ap.add_argument("--cabeca")
ap.add_argument("--largura", type=int, default=72)
ap.add_argument("--folga", type=float, default=1.4)
a = ap.parse_args()

if a.modo == "grade":
    grade(a.origem, a.saida)
else:
    if not a.cabeca:
        ap.error("recortar exige --cabeca ESQ,TOPO,DIR,QUEIXO")
    recortar(a.origem, a.saida, [float(v) for v in a.cabeca.split(",")], a.largura, a.folga)
