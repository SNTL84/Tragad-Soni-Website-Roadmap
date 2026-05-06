const fs=require('fs');

// Clean README base64
let readme=fs.readFileSync('README.b64','utf8');
readme=readme.replace(/-----BEGIN CERTIFICATE-----/g,'').replace(/-----END CERTIFICATE-----/g,'').replace(/\r/g,'').replace(/\n/g,'');
fs.writeFileSync('README_clean.b64',readme);

// Clean XLSX base64
let xlsx=fs.readFileSync('tempxlsx.b64','utf8');
xlsx=xlsx.replace(/-----BEGIN CERTIFICATE-----/g,'').replace(/-----END CERTIFICATE-----/g,'').replace(/\r/g,'').replace(/\n/g,'');
fs.writeFileSync('xlsx_clean.b64',xlsx);

console.log('Files cleaned successfully');
