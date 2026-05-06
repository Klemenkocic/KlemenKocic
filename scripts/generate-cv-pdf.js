const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateCVPDF(cvDir) {
  const htmlPath = path.join(cvDir, 'cv-klemen-kocic.html');
  const outputPath = path.join(cvDir, 'Klemen_Kocic_CV.pdf');

  let html = fs.readFileSync(htmlPath, 'utf8');

  const imgRegex = /<img[^>]*src="([^"]+)"/g;
  html = html.replace(imgRegex, (match, src) => {
    if (src.startsWith('data:') || src.startsWith('http')) return match;
    const imgPath = path.join(cvDir, src);
    if (!fs.existsSync(imgPath)) {
      console.warn(`Image not found: ${imgPath}`);
      return match;
    }
    const ext = path.extname(src).slice(1).toLowerCase();
    const mime = ext === 'jpg' ? 'jpeg' : ext;
    const data = fs.readFileSync(imgPath).toString('base64');
    return match.replace(src, `data:image/${mime};base64,${data}`);
  });

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    });
    console.log(`PDF generated: ${outputPath}`);
  } finally {
    await browser.close();
  }
}

const cvDir = process.argv[2] || path.join(__dirname, '..', 'cv', 'siemens-ai-implementation-support');
generateCVPDF(path.resolve(cvDir)).catch((err) => {
  console.error(err);
  process.exit(1);
});
