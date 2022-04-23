import * as fs from "fs";
var accounts = ['0x9067f9c0a1f8ce8d1b8d6b69be3eaad1d5e01a8c'];
var values = [138.94761072801504];
var merged = [];

fs.readFile("./avax-accandvalue.json", "utf-8", (err, jsonString) => {
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
                        values[u] += Number(data[i].value);

                    }
                }
                if(t < 1) {
                    accounts.push(data[i].address);
                    values.push(Number(data[i].value))
                }
            }

            for(var i = 0; i<accounts.length; i++) {
                let y = {
                    'account': accounts[i],
                    'value': values[i]
                }
                merged.push(y)
            }

            fs.writeFile("./onlyAccountsForAvax.json", JSON.stringify(accounts), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("nice!");
                }
            });

            fs.writeFile("./onlyValuesForAvax.json", JSON.stringify(values), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("nice!");
                }
            });

            fs.writeFile("./accountsAndValuesForAvax.json", JSON.stringify(merged), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("nice!");
                }
            });
            console.log(accounts.length)

        } catch (err) {
            console.log("Error parsing JSON", err);
        }
    }
});
