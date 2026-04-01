const { error } = require('console');
const fs = require('fs');
let newData = '';
fs.readFile('./a.txt', 'utf-8', (err, data) => {
  if (err) throw error;
  newData = data.replace(/\s+/g, " ").trim();
  fs.writeFile('./a.txt', newData, (err) => {
    if (err) throw error;
    return;
  })
  console.log("file changes done");
})
