const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    const htmlPath = path.join(__dirname, 'resume.html');
    const outputPath = path.join(__dirname, '..', 'public', 'Klemen_Kocic_Resume.pdf');

    console.log('Reading HTML file...');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');

    console.log('Loading HTML content...');
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    console.log('Generating PDF...');
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '15mm',
        right: '15mm',
        bottom: '15mm',
        left: '15mm'
      }
    });

    console.log(`PDF successfully generated at: ${outputPath}`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

generatePDF().catch(console.error);
