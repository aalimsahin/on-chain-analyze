import * as fs from "fs";
import Web3 from "web3";
var totalToken = 0; //1666069.382830001
var tx = 0; // 385
var deneme = [];



fs.readFile("./0-all-data.json", "utf-8", (err, jsonString) => {
  if (err) {
    console.log(err);
  } else {
    try {
      const data = JSON.parse(jsonString);

      for (var i = 0; i < data.data.items.length; i++) {
        if (data.data.items[i].log_events.length == 9) {
          var x = Web3.utils.hexToNumber(
            data.data.items[i].log_events[8].raw_log_data
          );
          var z = Number(x) / Math.pow(10,6)
          totalToken += z;
          tx += 1;
          let y = {
            address: "",
            value: "",
          };
          y.address = data.data.items[i].from_address;
          y.value = Number(z);
          deneme.push(y);
        } else if (data.data.items[i].log_events.length == 10){

            var x = Web3.utils.hexToNumber(
                data.data.items[i].log_events[9].raw_log_data
              );
              var z = Number(x) / Math.pow(10,6)
              totalToken += z;
              tx += 1;
              let y = {
                address: "",
                value: 0,
              };
              y.address = data.data.items[i].from_address;
              y.value = Number(z);
              deneme.push(y);
        }
      }

      console.log(totalToken);
      console.log(tx);

      fs.writeFile(
        "./3-ust-acc-v.json",
        JSON.stringify(deneme),
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("nice!");
          }
        }
      );
    } catch (err) {
      console.log("Error parsing JSON", err);
    }
  }
});