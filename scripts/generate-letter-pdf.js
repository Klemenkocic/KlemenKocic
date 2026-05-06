const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateLetterPDF(letterDir) {
  const htmlPath = path.join(letterDir, 'cover-letter.html');
  const outputPath = path.join(letterDir, 'Klemen_Kocic_Cover_Letter.pdf');

  const html = fs.readFileSync(htmlPath, 'utf8');

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

const letterDir = process.argv[2] || path.join(__dirname, '..', 'cv', 'siemens-ai-implementation-support');
generateLetterPDF(path.resolve(letterDir)).catch((err) => {
  console.error(err);
  process.exit(1);
});
