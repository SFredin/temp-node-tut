// Modules
"use strict";

const os = require("os");

//info about user
const user = os.userInfo();
console.log(user);

//method returns system uptime in seconds 
console.log(`System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);