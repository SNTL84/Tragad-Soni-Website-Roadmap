const fs = require('fs');

const readmeContent = fs.readFileSync('README_clean.b64', 'utf8');
const xlsxContent = fs.readFileSync('xlsx_clean.b64', 'utf8');

const output = {
  readme: readmeContent,
  xlsx: xlsxContent
};

fs.writeFileSync('upload_payload.json', JSON.stringify(output));
console.log('Ready for upload');
