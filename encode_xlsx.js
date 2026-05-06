const fs = require('fs');
const content = fs.readFileSync('Tragad_Soni_Website_Roadmap_Milan_SNTL84.xlsx').toString('base64');

// Split into chunks to avoid memory issues
const chunkSize = 100000;
for (let i = 0; i < content.length; i += chunkSize) {
  fs.appendFileSync('xlsx_encoded.txt', content.slice(i, i + chunkSize));
}
console.log('Excel file encoded');
