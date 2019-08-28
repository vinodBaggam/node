const fs = require('fs');
// Creates New File  if not exists and overwrite the content
fs.writeFileSync("notes.txt","My Name is XXX");
fs.writeFileSync("notes.txt","My Name is YYY");
fs.appendFileSync("notes.txt","My Name is ZZZ");
