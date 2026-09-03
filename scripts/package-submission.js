const fs = require('fs');
const path = require('path');

const targetDir = path.join(process.cwd(), 'Activity-1.1-DeVenecia-RalphVince');
if (fs.existsSync(targetDir)) {
  fs.rmSync(targetDir, { recursive: true, force: true });
}
fs.mkdirSync(targetDir, { recursive: true });

// 1. Copy report and documentation
fs.mkdirSync(path.join(targetDir, 'report'), { recursive: true });
fs.copyFileSync('report/Framework-Selection-Report.pdf', path.join(targetDir, 'report/Framework-Selection-Report.pdf'));
if (fs.existsSync('report/Framework-Selection-Report.md')) {
  fs.copyFileSync('report/Framework-Selection-Report.md', path.join(targetDir, 'report/Framework-Selection-Report.md'));
}

fs.mkdirSync(path.join(targetDir, 'documentation'), { recursive: true });
fs.copyFileSync('documentation/Atomic-Design-System-Manual.pdf', path.join(targetDir, 'documentation/Atomic-Design-System-Manual.pdf'));
if (fs.existsSync('documentation/Atomic-Design-System-Manual.md')) {
  fs.copyFileSync('documentation/Atomic-Design-System-Manual.md', path.join(targetDir, 'documentation/Atomic-Design-System-Manual.md'));
}

// 2. Copy source code (excluding node_modules, .next, .git, and submission folders)
const sourceTarget = path.join(targetDir, 'source-code');
fs.mkdirSync(sourceTarget, { recursive: true });

function copyRecursive(src, dest) {
  const items = fs.readdirSync(src);
  for (let item of items) {
    if (item === 'node_modules' || item === '.next' || item === '.git' || item.startsWith('Activity-') || item === 'out') {
      continue;
    }
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);
    if (stat.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyRecursive(process.cwd(), sourceTarget);
console.log('Created Activity-1.1-DeVenecia-RalphVince submission package.');