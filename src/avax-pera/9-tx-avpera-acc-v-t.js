import * as fs from "fs";
import Web3 from "web3";
import { ethers } from "ethers";
var deneme = [];

fs.readFile("./0-all-data.json", "utf-8", (err, jsonString) => {
    if (err) {
        console.log(err);
    } else {
        try {
            const data = JSON.parse(jsonString);

            for (var i = 0; i < data.data.items.length; i++) {
                if (data.data.items[i].log_events.length == 5) {
                    var x = Web3.utils.fromWei(data.data.items[i].value, "ether");

                    let y = {
                        address: "",
                        value: "",
                        time: ""
                    };
                    y.address = data.data.items[i].from_address;
                    y.value = Number(x);
                    y.time = data.data.items[i].block_signed_at;
                    deneme.push(y);
                } else if(data.data.items[i].log_events.length == 9){

                  var z  = ethers.utils.formatEther(data.data.items[i].log_events[8].raw_log_data)

                  let y = {
                    address: "",
                    value: "",
                    time: ""
                  };
                  y.address = data.data.items[i].from_address;
                  y.value = Number(z);
                  y.time = data.data.items[i].block_signed_at;
                  deneme.push(y);
                } else if(data.data.items[i].log_events.length == 8){

                  var z  = ethers.utils.formatEther(data.data.items[i].log_events[7].raw_log_data)
                  let y = {
                    address: "",
                    value: "",
                    time: ""
                  };
                  y.address = data.data.items[i].from_address;
                  y.value = Number(z);
                  y.time = data.data.items[i].block_signed_at;
                  deneme.push(y);
                }
            }

            fs.writeFile("./9-tx-avpera-acc-v-t.json", JSON.stringify(deneme), (err) => {
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
