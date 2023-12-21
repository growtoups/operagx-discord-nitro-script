const axios = require('axios');
const fs = require('fs');

const apiUrl = 'https://api.discord.gx.games/v1/direct-fulfillment';
const localAddress = 'ip'; // Replace with the desired IP address
const headers = {
  'authority': 'api.discord.gx.games',
  'accept': '*/*',
  'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
  'content-type': 'application/json',
  'origin': 'https://www.opera.com',
  'referer': 'https://www.opera.com/',
  'sec-ch-ua': '"Opera GX";v="105", "Chromium";v="119", "Not?A_Brand";v="24"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'cross-site',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 OPR/105.0.0.0',
};

const data = {
  partnerUserId: '0e1f1036a407b1afbe691a292fc817ce970ca859b88c05af722677891e2d15b1',
};
function performRequest() {
  axios.post(apiUrl, data, { headers, localAddress })
    .then(response => {
      const token = response.data.token;
      const filePath = 'token.txt';

      // Append token to the existing file
      fs.appendFileSync(filePath, token + '\nhttps://discord.com/billing/partner-promotions/1180231712274387115/', { encoding: 'utf-8' });
      console.log(`Token appended to ${filePath}`);
    })
    .catch(error => {
      console.error('Error making POST request:', error.message);
    });
}

// Set up the interval to perform the request every 2.25 seconds
setInterval(performRequest, 2250);
