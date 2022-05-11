setInterval(() => {
   console.log("Hello World");
}, 2000);
console.log("I am first");
//Process stays alive (setinterval), task is not completed. Jämför med setTimeout som blir klar. 