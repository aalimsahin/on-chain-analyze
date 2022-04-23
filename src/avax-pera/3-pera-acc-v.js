import * as fs from "fs";
import Web3 from "web3";
import { ethers } from "ethers";
var totalToken = 0; // 15169358.246226905
var tx = 0; // 597
var deneme = [];

fs.readFile("./0-all-data.json", "utf-8", (err, jsonString) => {
  if (err) {
    console.log(err);
  } else {
    try {
      const data = JSON.parse(jsonString);

      for (var i = 0; i < data.data.items.length; i++) {
        if (data.data.items[i].log_events.length == 9) {

          var z  = ethers.utils.formatEther(data.data.items[i].log_events[8].raw_log_data)
          totalToken += Number(z);
          tx += 1;
          let y = {
            address: "",
            value: "",
          };
          y.address = data.data.items[i].from_address;
          y.value = Number(z);
          deneme.push(y);
        } else if (data.data.items[i].log_events.length == 8){

            var z  = ethers.utils.formatEther(data.data.items[i].log_events[7].raw_log_data)

              totalToken += Number(z);
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
        "./3-pera-acc-v.json",
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