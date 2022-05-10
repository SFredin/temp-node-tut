// npm --v

// local dependency / only this project
// npm i <packagename>

// global dependency / use for all projects
// npm i -g <packagename> 
// på mac: sudo npm i -g <packagename> 

const _ = require("lodash");

const items = [1,[2,[3,[4]]]]; 

const newItems = _.flattenDeep(items);
console.log(newItems);