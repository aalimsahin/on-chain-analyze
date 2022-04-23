import * as fs from "fs";
import Web3 from "web3";
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
                    y.value = x * data.data.items[i].gas_quote_rate;
                    y.time = data.data.items[i].block_signed_at;
                    deneme.push(y);
                } else if(data.data.items[i].log_events.length == 9){

                  var x = Web3.utils.hexToNumber(
                    data.data.items[i].log_events[8].raw_log_data
                  );
                  var z = Number(x) / Math.pow(10,6)

                  let y = {
                    address: "",
                    value: "",
                    time: ""
                  };
                  y.address = data.data.items[i].from_address;
                  y.value = Number(z);
                  y.time = data.data.items[i].block_signed_at;
                  deneme.push(y);
                } else if(data.data.items[i].log_events.length == 10){

                  var x = Web3.utils.hexToNumber(
                    data.data.items[i].log_events[9].raw_log_data
                  );
                  var z = Number(x) / Math.pow(10,6)
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

            fs.writeFile("./10-tx-allust-acc-v-t.json", JSON.stringify(deneme), (err) => {
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
