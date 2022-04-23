import * as fs from "fs";
var deneme = ['bos'];

fs.readFile("./1-av-acc-v.json", "utf-8", (err, jsonString) => {
    if (err) {
        console.log(err);
    } else {
        try {
            const data = JSON.parse(jsonString);

            for( var i = 0 ; i < data.length; i++) {
              let t = -1;
              for(var u = 0; u < deneme.length; u ++) {
                if(data[i].address == deneme[u].address){
                  t = u;
                }
              }
              if(t == -1) {
                if(deneme[0] == 'bos'){
                  deneme = [];
                }
                let y = {
                  address: "",
                  value: 0
                }
                y.address = data[i].address;
                y.value = Number(data[i].value)
                deneme.push(y);
              }else{
                deneme[t].value += Number(data[i].value);
              }
            }

            fs.writeFile("./1-m-av-acc-v.json", JSON.stringify(deneme), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("nice!");
                }
            });
        } catch (err) {
            console.log("Error parsing JSON", err);
        }
    }
});