const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

//Hämta den absoluta sökvägen. Används för att vår applikation kommer köras i olika miljöer. 
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);