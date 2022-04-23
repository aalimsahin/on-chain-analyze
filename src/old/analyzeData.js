// import * as fs from "fs";
// import Web3 from "web3";
// var totalAvax = 0;
// var tx = 0;
// var deneme = [];

// // 412 tx
// // 25181.760516254726 avax

// fs.readFile("./allData.json", "utf-8", (err, jsonString) => {
//     if (err) {
//         console.log(err);
//     } else {
//         try {
//             const data = JSON.parse(jsonString);

//             for (var i = 0; i < data.data.items.length; i++) {
//                 if (data.data.items[i].log_events.length == 5) {
//                     var x = Web3.utils.fromWei(data.data.items[i].value, "ether");
//                     totalAvax += Number(x);
//                     tx += 1;

//                     let y = {
//                         address: "",
//                         value: "",
//                     };
//                     y.address = data.data.items[i].from_address;
//                     y.value = x;
//                     deneme.push(y);
//                 }
//             }

//             console.log(totalAvax);
//             console.log(tx);
//             fs.writeFile("./avax-accandvalue.json", JSON.stringify(deneme), (err) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log("nice!");
//                 }
//             });
//         } catch (err) {
//             console.log("Error parsing JSON", err);
//         }
//     }
// });

















import * as fs from "fs";
import Web3 from "web3";
var totalAvax = 0;
var tx = 0;
var deneme = [];

// 412 tx
// 25181.760516254726 avax

fs.readFile("./allData.json", "utf-8", (err, jsonString) => {
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
                    y.value = x * Number(data.data.items[i].gas_quote_rate);
                    deneme.push(y);
                }
            }

            console.log(totalAvax);
            console.log(tx);
            fs.writeFile("./avax$-accandvalue.json", JSON.stringify(deneme), (err) => {
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





















// // tokennnnnnnnnnnnnnn

// import * as fs from "fs";
// import Web3 from "web3";
// var totalToken = 0;
// var tx = 0;
// var deneme = [];

// // total 1525414.1842760008
// // tx 375

// fs.readFile("./allData.json", "utf-8", (err, jsonString) => {
//   if (err) {
//     console.log(err);
//   } else {
//     try {
//       const data = JSON.parse(jsonString);

//       for (var i = 0; i < data.data.items.length; i++) {
//         if (data.data.items[i].log_events.length == 9) {
//           var x = Web3.utils.hexToNumber(
//             data.data.items[i].log_events[8].raw_log_data
//           );
//           var z = Number(x) / Math.pow(10,6)
//           totalToken += z;
//           tx += 1;
//           let y = {
//             address: "",
//             value: "",
//           };
//           y.address = data.data.items[i].from_address;
//           y.value = z.toString();
//           deneme.push(y);
//         } else if (data.data.items[i].log_events.length == 10){

//             var x = Web3.utils.hexToNumber(
//                 data.data.items[i].log_events[9].raw_log_data
//               );
//               var z = Number(x) / Math.pow(10,6)
//               totalToken += z;
//               tx += 1;
//               let y = {
//                 address: "",
//                 value: "",
//               };
//               y.address = data.data.items[i].from_address;
//               y.value = z.toString();
//               deneme.push(y);
//         }
//       }

//       console.log(totalToken);
//       console.log(tx);

//       fs.writeFile(
//         "./token-accandvalue.json",
//         JSON.stringify(deneme),
//         (err) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("nice!");
//           }
//         }
//       );
//     } catch (err) {
//       console.log("Error parsing JSON", err);
//     }
//   }
// });








// // accountsss
// only avax accounts

// import * as fs from "fs";
// var accounts = ['0x9067f9c0a1f8ce8d1b8d6b69be3eaad1d5e01a8c'];
// var values = [138.94761072801504];
// var merged = [];

// fs.readFile("./avax-accandvalue.json", "utf-8", (err, jsonString) => {
//     if (err) {
//         console.log(err);
//     } else {
//         try {
//             const data = JSON.parse(jsonString);

//             for (var i = 0; i < data.length; i++) {
//                 var t = 0;
//                 for (var u = 0; u < accounts.length; u++) {
//                     if (data[i].address === accounts[u]) {
//                         t += 1;
//                         values[u] += Number(data[i].value);

//                     }
//                 }
//                 if(t < 1) {
//                     accounts.push(data[i].address);
//                     values.push(Number(data[i].value))
//                 }
//             }

//             for(var i = 0; i<accounts.length; i++) {
//                 let y = {
//                     'account': accounts[i],
//                     'value': values[i]
//                 }
//                 merged.push(y)
//             }

//             fs.writeFile("./onlyAccountsForAvax.json", JSON.stringify(accounts), (err) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log("nice!");
//                 }
//             });

//             fs.writeFile("./onlyValuesForAvax.json", JSON.stringify(values), (err) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log("nice!");
//                 }
//             });

//             fs.writeFile("./accountsAndValuesForAvax.json", JSON.stringify(merged), (err) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log("nice!");
//                 }
//             });
//             console.log(accounts.length)

//         } catch (err) {
//             console.log("Error parsing JSON", err);
//         }
//     }
// });
















// // // only token accounts
// import * as fs from "fs";
// var accounts = ['0x9067f9c0a1f8ce8d1b8d6b69be3eaad1d5e01a8c'];
// var values = [10504.353238];
// var merged = [];

// fs.readFile("./token-accandvalue.json", "utf-8", (err, jsonString) => {
//     if (err) {
//         console.log(err);
//     } else {
//         try {
//             const data = JSON.parse(jsonString);

//             for (var i = 0; i < data.length; i++) {
//                 var t = 0;
//                 for (var u = 0; u < accounts.length; u++) {
//                     if (data[i].address === accounts[u]) {
//                         t += 1;
//                         values[u] += Number(data[i].value);

//                     }
//                 }
//                 if(t < 1) {
//                     accounts.push(data[i].address);
//                     values.push(Number(data[i].value))
//                 }
//             }

//             for(var i = 0; i<accounts.length; i++) {
//                 let y = {
//                     'account': accounts[i],
//                     'value': values[i]
//                 }
//                 merged.push(y)
//             }

//             fs.writeFile("./onlyAccountsForToken.json", JSON.stringify(accounts), (err) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log("nice!");
//                 }
//             });

//             fs.writeFile("./onlyValuesForToken.json", JSON.stringify(values), (err) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log("nice!");
//                 }
//             });

//             fs.writeFile("./accountsAndValuesForToken.json", JSON.stringify(merged), (err) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log("nice!");
//                 }
//             });
//             console.log(merged.length)

//         } catch (err) {
//             console.log("Error parsing JSON", err);
//         }
//     }
// });


















// import * as fs from "fs";

// var accounts = ['0x9067f9c0a1f8ce8d1b8d6b69be3eaad1d5e01a8c'];


// fs.readFile("./avax-accandvalue.json", "utf-8", (err, jsonString) => {
//     if (err) {
//         console.log(err);
//     } else {
//         try {
//             const data = JSON.parse(jsonString);

//             for (var i = 0; i < data.length; i++) {
//                 var t = 0;
//                 for (var u = 0; u < accounts.length; u++) {
//                     if (data[i].address === accounts[u]) {
//                         t += 1;

//                     }
//                 }
//                 if(t < 1) {
//                     accounts.push(data[i].address);
//                 }
//             }

//             fs.writeFile("./onlyAccountsForAvax.json", JSON.stringify(accounts), (err) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log("nice!");
//                 }
//             });

//             console.log(accounts.length)

//         } catch (err) {
//             console.log("Error parsing JSON", err);
//         }
//     }
// });

// var accounts2 = ['0x9067f9c0a1f8ce8d1b8d6b69be3eaad1d5e01a8c'];

// fs.readFile("./avax-accandvalue.json", "utf-8", (err, jsonString) => {
//     if (err) {
//         console.log(err);
//     } else {
//         try {
//             const data = JSON.parse(jsonString);

//             for (var i = 0; i < data.length; i++) {
//                 var t = 0;
//                 for (var u = 0; u < accounts2.length; u++) {
//                     if (data[i].address === accounts2[u]) {
//                         t += 1;

//                     }
//                 }
//                 if(t < 1) {
//                     accounts2.push(data[i].address);
//                 }
//             }

//             fs.writeFile("./onlyAccountsForAvax.json", JSON.stringify(accounts2), (err) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log("nice!");
//                 }
//             });

//             console.log(accounts2.length)
//             var acc3 = [];
// accounts.forEach(add => {
//     let e = 0;
//     for(var u = 0; u < accounts2.length; u++) {
//         if(add === accounts2[u]) {
//             e = 1;
//         }
//     }
//     if(e > 0) {
//         acc3.push(add)
//     }
// })
// console.log(acc3.length)

//         } catch (err) {
//             console.log("Error parsing JSON", err);
//         }
//     }
// });
