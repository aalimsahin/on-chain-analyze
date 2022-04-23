import { createRequire } from "module";
import * as fs from "fs";
const require = createRequire(import.meta.url);
const json1 = require("./2-m-av-acc-vdolar.json");
const json2 = require("./3-m-ust-acc-v.json");
const json3 = json1;


for( var i = 0; i < json2.length; i++) {
  let t = -1;
  for(var u = 0; u < json3.length; u++){
    if(json2[i].address  == json3[u].address){
      t = u;
    }
  }

  if (-1 < t) {
    json3[t].value += json2[i].value;
  }else if (t < 0) {

    json3.push(json2[i]);
  }

}


fs.writeFile("5-tust-acc-v.json", JSON.stringify(json3), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("nice!");
  }
});
