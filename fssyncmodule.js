const {readFileSync, writeFileSync} = require("fs");
console.log("Start");
// Vi använder modulen FS och metoderna readFile för att läsa filer
const first = readFileSync("./content/first.txt", "UTF-8");
const second = readFileSync("./content/second.txt", "UTF-8");

//WriteFile för att skapa och skriva till
writeFileSync(
    "./content/result-sync.txt",
    `Here is the result: ${first}, ${second}`,
    {flag:"a"}
);
console.log("Done with this task");
console.log("Starting next task"); 