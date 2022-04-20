// const fs = require('fs');
// const fetch = require('node-fetch@2');

import * as fs from 'fs';
import Web3 from 'web3';
var totalAvax = 0;
var tx = 0;
var y = {
    'address': 'asdfasf',
    'value': '2sadfasf'
}
fs.readFile('./allData.json', 'utf-8', (err, jsonString) => {
  if(err) {
    console.log(err);
  } else {

    try {
      const data = JSON.parse(jsonString);
    //   console.log(data.data.items[0].log_events.length == 9)
    // console.log(data.data.items.length)
      for(var i = 0; i < 1; i++ ) {

          fs.readFile('./trial.json', 'utf-8', (err, jsonString) => {
            if(err) {
              console.log(err);
            } else {
          
              try {
                const data = JSON.parse(jsonString);
                data.push(y)

                fs.writeFile('./trial.json', JSON.stringify(deneme), err => {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log('nice!')
                    }
                })
                console.log(data)

              } catch (err) {
                console.log('Error parsing JSON', err);
              }
            }
          })


          }
      
    } catch (err) {
      console.log('Error parsing JSON', err);
    }
  }
})

// const newObject = {
//   name: 'furkan cof',
//   order_count: 4,
//   address: 'korkuteli'
// }

// const jsonString =JSON.stringify(newObject);
// console.log(jsonString)

// fs.writeFile('./pera2.json', jsonString, err => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log('nice!')
//   }
// })


