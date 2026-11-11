"""Generate a printable QR card for the deployed site.

usage: python3 make_qr.py [url] [outfile]
"""
import sys, os
sys.path.insert(0, "/tmp/pylibs")

import qrcode
from qrcode.image.styledpil import StyledPilImage
from PIL import Image, ImageDraw, ImageFont

URL = sys.argv[1] if len(sys.argv) > 1 else "https://ringonoel.github.io/"
OUT = sys.argv[2] if len(sys.argv) > 2 else "qrcode.png"

NAVY = (4, 26, 56)
INK = (216, 231, 238)
MUTED = (140, 165, 185)

W, H = 1200, 1500
CARD = Image.new("RGB", (W, H), NAVY)
d = ImageDraw.Draw(CARD)


def font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except OSError:
        return ImageFont.load_default()


SERIF = "/System/Library/Fonts/Supplemental/Didot.ttc"
SANS = "/System/Library/Fonts/Supplemental/Futura.ttc"
f_title = font(SERIF, 120)
f_jp = font("/System/Library/Fonts/Supplemental/Arial Unicode.ttf", 34)
f_small = font(SANS, 26)
f_url = font(SANS, 40)

# title
t = "RADWIMPS"
tw = d.textlength(t, font=f_title)
d.text(((W - tw) / 2, 110), t, font=f_title, fill=INK)

jp = "ラッドウィンプス"
jw = d.textlength(jp, font=f_jp)
d.text(((W - jw) / 2, 260), jp, font=f_jp, fill=MUTED)

# QR
qr = qrcode.QRCode(version=None, error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=12, border=2)
qr.add_data(URL)
qr.make(fit=True)
img = qr.make_image(fill_color=NAVY, back_color=INK).get_image().convert("RGB")
size = 760
img = img.resize((size, size), Image.NEAREST)
x, y = (W - size) // 2, 360
pad = 34
d.rounded_rectangle([x - pad, y - pad, x + size + pad, y + size + pad], radius=28, fill=INK)
CARD.paste(img, (x, y))

# url
u = URL.replace("https://", "").rstrip("/")
uw = d.textlength(u, font=f_url)
d.text(((W - uw) / 2, y + size + 90), u, font=f_url, fill=INK)

hint = "SCAN TO OPEN · 扫描打开"
hw = d.textlength(hint, font=f_small)
d.text(((W - hw) / 2, y + size + 165), hint, font=f_small, fill=MUTED)

CARD.save(OUT, quality=95)
print("saved", OUT, CARD.size)
