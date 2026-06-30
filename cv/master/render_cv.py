#!/usr/bin/env python3
import base64, subprocess, os, sys, shutil
import fitz

HERE = os.path.dirname(os.path.abspath(__file__))
# Optional CLI args: 1) input HTML template  2) output PDF path.
# With no args, behaviour is identical to before (renders the master CV).
HTML_TMPL = os.path.abspath(sys.argv[1]) if len(sys.argv) > 1 else os.path.join(HERE, "cv_styled.html")
PDF_FINAL = os.path.abspath(sys.argv[2]) if len(sys.argv) > 2 else os.path.join(HERE, "Klemen_Kocic_CV_Styled.pdf")
PHOTO = os.path.join(HERE, "photo.jpg")
OUTDIR = os.path.dirname(PDF_FINAL)
HTML_OUT = os.path.join(OUTDIR, "_cv_render.html")
PDF_RAW = os.path.join(OUTDIR, "_cv_raw.pdf")
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

# 3. finalize (no in-body footer: keeps the text layer clean for ATS/LLM parsing;
#    contact details live in the header, so nothing is lost)
doc = fitz.open(PDF_RAW)
doc.save(PDF_FINAL, garbage=4, deflate=True)
npages = doc.page_count
doc.close()

# 4. previews
doc = fitz.open(PDF_FINAL)
for i, p in enumerate(doc):
    p.get_pixmap(matrix=fitz.Matrix(1.6, 1.6)).save(os.path.join(OUTDIR, f"_preview_{i}.png"))
doc.close()
print(f"OK -> {PDF_FINAL}  ({npages} pages)")
