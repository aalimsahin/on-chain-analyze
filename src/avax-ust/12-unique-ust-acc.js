

// // only token accounts
import * as fs from "fs";
var accounts = ['bos'];


fs.readFile("./3-ust-acc-v.json", "utf-8", (err, jsonString) => {
    if (err) {
        console.log(err);
    } else {
        try {
            const data = JSON.parse(jsonString);

            for (var i = 0; i < data.length; i++) {
                var t = 0;
                for (var u = 0; u < accounts.length; u++) {
                    if (data[i].address === accounts[u]) {
                        t += 1;

                    }
                }
                if(t < 1) {
                  if(accounts[0] == 'bos') {
                    accounts = [];
                  }
                    accounts.push(data[i].address);
                }
            }

            fs.writeFile("./12-unique-ust-acc.json", JSON.stringify(accounts), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("nice!");
                }
            });

            console.log('Yes!')

        } catch (err) {
            console.log("Error parsing JSON", err);
        }
    }
});
