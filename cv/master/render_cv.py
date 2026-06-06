#!/usr/bin/env python3
import base64, subprocess, os, sys, shutil
import fitz

HERE = os.path.dirname(os.path.abspath(__file__))
HTML_TMPL = os.path.join(HERE, "cv_styled.html")
PHOTO = os.path.join(HERE, "photo.jpg")
HTML_OUT = os.path.join(HERE, "_cv_render.html")
PDF_RAW = os.path.join(HERE, "_cv_raw.pdf")
PDF_FINAL = os.path.join(HERE, "Klemen_Kocic_CV_Styled.pdf")
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# 1. embed photo as data URI
with open(PHOTO, "rb") as f:
    b64 = base64.b64encode(f.read()).decode()
data_uri = "data:image/jpeg;base64," + b64
with open(HTML_TMPL) as f:
    html = f.read()
html = html.replace("__PHOTO_DATA_URI__", data_uri)
with open(HTML_OUT, "w") as f:
    f.write(html)

# 2. Chrome headless -> PDF
cmd = [
    CHROME, "--headless", "--disable-gpu", "--no-pdf-header-footer",
    "--print-to-pdf=" + PDF_RAW, "--no-margins",
    "file://" + HTML_OUT,
]
r = subprocess.run(cmd, capture_output=True, text=True)
if not os.path.exists(PDF_RAW):
    print("CHROME FAILED", r.stdout, r.stderr); sys.exit(1)

# 3. stamp running footer on every page
doc = fitz.open(PDF_RAW)
W = doc[0].rect.width
H = doc[0].rect.height
line1 = "Klemen Kocic  ·  Munich, Germany  ·  klemen.kocic@gmail.com"
line2 = "klemenkocic.com  ·  linkedin.com/in/klemenkocic  ·  github.com/Klemenkocic"
gray = (0.42, 0.42, 0.42)
for page in doc:
    for i, txt in enumerate((line1, line2)):
        fs = 7.6
        tw = fitz.get_text_length(txt, fontname="helv", fontsize=fs)
        x = (W - tw) / 2
        y = H - 30 + i * 9.5
        page.insert_text((x, y), txt, fontname="helv", fontsize=fs, color=gray)
doc.save(PDF_FINAL, garbage=4, deflate=True)
npages = doc.page_count
doc.close()

# 4. previews
doc = fitz.open(PDF_FINAL)
for i, p in enumerate(doc):
    p.get_pixmap(matrix=fitz.Matrix(1.6, 1.6)).save(os.path.join(HERE, f"_preview_{i}.png"))
doc.close()
print(f"OK -> {PDF_FINAL}  ({npages} pages)")
