const fs = require('fs');
const path = require('path');

const cnamePath = path.join(__dirname, 'dist', 'CNAME');

if (!fs.existsSync(cnamePath)) {
  console.error('\x1b[31m%s\x1b[0m', '❌ Error: CNAME file not found in dist/. Make sure it exists in public/ before building.');
  process.exit(1);
} else {
  console.log('\x1b[32m%s\x1b[0m', '✅ CNAME file found in dist/. Ready to deploy!');
}