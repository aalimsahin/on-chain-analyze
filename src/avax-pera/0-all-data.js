import * as fs from 'fs';
import fetch from 'node-fetch';


const getTrial = async (url) => {
    let response = await fetch(url)
    response = await response.json()
    fs.writeFile('./0-all-data.json', JSON.stringify(response), err => {
  if(err) {
    console.log(err);
  } else {
    console.log('nice!')
  }
})
}
// getTrial("https://api.snowtrace.io/api?module=logs&action=getLogs&fromBlock=13460659&toBlock=13637733&address=0xC774E97f6574C302b37Eba37470F869A54946009&apikey=5GXUG65R2F2PYAY6SNIZNDZF4593JHIXY5")
// https://api.covalenthq.com/v1/1/address/0xC774E97f6574C302b37Eba37470F869A54946009/transactions_v2/?key=ckey_1c56a51b5de9463fa8f4dbec5ec
getTrial('https://api.covalenthq.com/v1/43114/address/0x635fa23B10a2418cC4224BE1EAab46a5E9252892/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&page-size=2000&key=ckey_1c56a51b5de9463fa8f4dbec5ec')