import * as fs from "fs";
import Web3 from "web3";
var totalAvax = 0; // 6204.969967883861
var tx = 0; // 686
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
                    totalAvax += Number(x);
                    tx += 1;

                    let y = {
                        address: "",
                        value: "",
                    };
                    y.address = data.data.items[i].from_address;
                    y.value = x * data.data.items[i].gas_quote_rate;
                    deneme.push(y);
                }
            }

            console.log(totalAvax);
            console.log(tx);
            fs.writeFile("./2-av-acc-vdolar.json", JSON.stringify(deneme), (err) => {
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