"""Gera o _wp_attachment_metadata (PHP serializado) de uma imagem enviada por FTP.

Uso:
  python3 wp_meta.py <pasta_local> '<json>'
  json = {"file": "ryo-sakazaki.webp", "w": 1200, "h": 1600, "mime": "image/webp", "ym": "2026/11",
          "sizes": {"medium": ["ryo-sakazaki-225x300.webp", 225, 300],
                    "thumbnail": ["ryo-sakazaki-150x150.webp", 150, 150]}}

Os arquivos precisam existir em <pasta_local> (o filesize é lido deles).
Valide a saída com: php -r 'var_dump((bool)unserialize(trim(stream_get_contents(STDIN))));'
"""
import json
import os
import sys

d = sys.argv[1]
spec = json.loads(sys.argv[2])


def s(x):
    b = x.encode()
    return f's:{len(b)}:"{x}";'


def size(f, w, h, mime):
    return ("a:5:{" + s("file") + s(f) + s("width") + f"i:{w};" + s("height") + f"i:{h};"
            + s("mime-type") + s(mime) + s("filesize") + f"i:{os.path.getsize(os.path.join(d, f))};" + "}")


im = ["aperture", "0", "credit", "", "camera", "", "caption", "", "created_timestamp", "0", "copyright", "",
      "focal_length", "0", "iso", "0", "shutter_speed", "0", "title", "", "orientation", "0"]
imeta = "a:12:{" + "".join(s(im[i]) + s(im[i + 1]) for i in range(0, len(im), 2)) + s("keywords") + "a:0:{}}"
sizes = spec["sizes"]
ym = spec.get("ym", "2026/11")
out = ("a:6:{" + s("width") + f"i:{spec['w']};" + s("height") + f"i:{spec['h']};"
       + s("file") + s(f"{ym}/{spec['file']}")
       + s("filesize") + f"i:{os.path.getsize(os.path.join(d, spec['file']))};"
       + s("sizes") + f"a:{len(sizes)}:{{" + "".join(s(k) + size(*v, spec['mime']) for k, v in sizes.items()) + "}"
       + s("image_meta") + imeta + "}")
print(out)
