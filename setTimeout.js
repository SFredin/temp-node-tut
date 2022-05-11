console.log("First");
setTimeout(()=>{
    console.log("Second");
}, 0);
console.log("Third");

//SetTimeout är async. Därför offloadas den. Resultatet kommer därför bli first, third, second. 