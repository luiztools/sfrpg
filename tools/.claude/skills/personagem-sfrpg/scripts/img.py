"""Converte imagens no padrão do blog e gera os tamanhos que o WordPress criaria.

Requer Pillow (crie um venv: python3 -m venv venv && venv/bin/pip install pillow).

  python3 -I img.py main   <origem> <pasta_saida> <slug>
      -> <slug>.webp (tamanho original), <slug>-WxH.webp (cabe em 300x300), <slug>-150x150.webp
  python3 -I img.py banner <origem> <pasta_saida> <slug>-banner [--max 1920]
      -> <nome>.jpg (corta faixas pretas de letterbox e limita a --max), versões 1024/768/300
         quando a imagem for maior que isso, e <nome>-150x150.jpg
      Se a origem for GIF animado, copie o .gif original como arquivo principal (preserva a
      animação) e use este script só para gerar as miniaturas.

Imprime as dimensões finais (use-as no _wp_attachment_metadata e no width/height do <img>).
"""
import sys
from PIL import Image, ImageOps


def letterbox(im):
    g = im.convert("L")
    w, h = im.size
    rows = [sum(g.getpixel((x, y)) for x in range(0, w, 8)) / (w / 8) for y in range(h)]
    top = next(y for y, v in enumerate(rows) if v > 12)
    bot = h - next(y for y, v in enumerate(reversed(rows)) if v > 12)
    return im.crop((0, top, w, bot)) if (top > 10 or h - bot > 10) else im


mode, src, out, name = sys.argv[1:5]
if mode == "main":
    im = Image.open(src).convert("RGBA")
    im.save(f"{out}/{name}.webp", "WEBP", quality=85)
    m = im.copy(); m.thumbnail((300, 300)); m.save(f"{out}/{name}-{m.size[0]}x{m.size[1]}.webp", "WEBP", quality=85)
    w, h = im.size; s = min(w, h)
    im.crop(((w - s) // 2, 0, (w - s) // 2 + s, s)).resize((150, 150)).save(f"{out}/{name}-150x150.webp", "WEBP", quality=85)
    print("main", im.size, "medium", m.size)
elif mode == "banner":
    mx = int(sys.argv[sys.argv.index("--max") + 1]) if "--max" in sys.argv else 1920
    im = Image.open(src); im.seek(0)
    b = letterbox(im.convert("RGB"))
    b.thumbnail((mx, mx), Image.LANCZOS)
    b.save(f"{out}/{name}.jpg", quality=88)
    sizes = {}
    for key, bw in (("large", 1024), ("medium_large", 768), ("medium", 300)):
        if max(b.size) > bw:
            m = b.copy(); m.thumbnail((bw, bw), Image.LANCZOS)
            m.save(f"{out}/{name}-{m.size[0]}x{m.size[1]}.jpg", quality=88); sizes[key] = m.size
    ImageOps.fit(b, (150, 150)).save(f"{out}/{name}-150x150.jpg", quality=88)
    print("banner", b.size, sizes)
