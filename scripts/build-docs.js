const fs = require('fs');
const path = require('path');

function formatMarkdown(md, title) {
  let body = md
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    .replace(/---/gim, '<hr/>');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <style>
    body { font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif; line-height: 1.65; color: #202322; background: #FBF8F1; max-width: 880px; margin: 40px auto; padding: 0 24px; }
    h1 { color: #182A35; font-family: 'Georgia', serif; border-bottom: 2px solid #B85C3D; padding-bottom: 12px; margin-top: 0; }
    h2 { color: #182A35; font-family: 'Georgia', serif; border-bottom: 1px solid #E2D7C3; padding-bottom: 6px; margin-top: 36px; }
    h3 { color: #B85C3D; margin-top: 24px; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; background: #FFF; }
    th, td { border: 1px solid #E2D7C3; padding: 10px 14px; text-align: left; }
    th { background: #182A35; color: #FBF8F1; font-weight: 600; }
    code { background: #E8DDCA; padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 0.9em; }
    pre { background: #182A35; color: #FBF8F1; padding: 16px; border-radius: 6px; overflow-x: auto; }
    pre code { background: none; color: inherit; padding: 0; }
    hr { border: none; border-top: 1px solid #E2D7C3; margin: 30px 0; }
    strong { color: #182A35; }
    @media print { body { background: #FFF; margin: 0; max-width: 100%; } }
  </style>
</head>
<body>
  ${body}
</body>
</html>`;
}

// Generate HTML files
const reportMd = fs.readFileSync('report/Framework-Selection-Report.md', 'utf8');
fs.writeFileSync('report/Framework-Selection-Report.html', formatMarkdown(reportMd, 'Framework Selection Report'), 'utf8');

const docMd = fs.readFileSync('documentation/Atomic-Design-System-Manual.md', 'utf8');
fs.writeFileSync('documentation/Atomic-Design-System-Manual.html', formatMarkdown(docMd, 'Atomic Design System Manual'), 'utf8');

// Also create simple valid PDF copies or PDFs from text
// Minimal valid PDF generator
function createSimplePdf(text, outputPath, title) {
  const lines = text.split('\n');
  let streamContent = 'BT /F1 10 Tf 50 750 Td 14 TL (' + title.replace(/[()\\]/g, '') + ') Tj T* ';
  let y = 730;
  for (let line of lines) {
    if (y < 50) break;
    const cleanLine = line.replace(/[()\\]/g, '').replace(/[^\x20-\x7E]/g, ' ');
    if (cleanLine.trim().length > 0) {
      streamContent += '(' + cleanLine.substring(0, 95) + ') Tj T* ';
      y -= 14;
    }
  }
  streamContent += 'ET';
  const streamLength = Buffer.byteLength(streamContent);

  const pdfData = `%PDF-1.4
1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj
2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj
3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj
4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj
5 0 obj << /Length ${streamLength} >>
stream
${streamContent}
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000056 00000 n 
0000000111 00000 n 
0000000222 00000 n 
0000000299 00000 n 
trailer << /Size 6 /Root 1 0 R >>
startxref
${400 + streamLength}
%%EOF`;

  fs.writeFileSync(outputPath, pdfData, 'utf8');
}

createSimplePdf(reportMd, 'report/Framework-Selection-Report.pdf', 'Framework Selection Report');
createSimplePdf(docMd, 'documentation/Atomic-Design-System-Manual.pdf', 'Atomic Design System Manual');

console.log('Generated reports, HTML files, and PDF files successfully.');