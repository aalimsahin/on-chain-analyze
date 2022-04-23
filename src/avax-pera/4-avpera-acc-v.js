import { createRequire } from "module";
import * as fs from "fs";
const require = createRequire(import.meta.url);
const json1 = require("./1-m-av-acc-v.json");
const json2 = require("./3-m-pera-acc-v.json");
const json3 = [];

for( var i = 0; i < json1.length; i++) {
  let y = {
    address: "",
    avaxValue: 0,
    ustValue: 0
  }

  y.address = json1[i].address;
  y.avaxValue = json1[i].value;
  json3.push(y)

}

for( var i = 0; i < json2.length; i++) {
  let t = -1;
  for(var u = 0; u < json3.length; u++){
    if(json2[i].address  == json3[u].address){
      t = u;
    }
  }
  console.log(t)
  if (-1 < t) {
    json3[t].ustValue = json2[i].value;
  }else if (t < 0) {
    let y = {
      address: "",
      avaxValue: 0,
      peraValue: 0
    }
    y.address = json2[i].address;
    y.ustValue = json2[i].value;
    json3.push(y);
  }

}


fs.writeFile("4-avpera-acc-v.json", JSON.stringify(json3), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("nice!");
  }
});
