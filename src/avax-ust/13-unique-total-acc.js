import * as fs from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const acc1 = require("./11-unique-av-acc.json");
const acc2 = require("./12-unique-ust-acc.json");
const total = [...acc1, ...acc2]

var result = [];
total.forEach(function(item) {
     if(result.indexOf(item) < 0) {
         result.push(item);
     }
});

fs.writeFile("./13-unique-total-acc.json", JSON.stringify(result), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("nice!");
  }
});
