const fetch = require("node-fetch"); 
const fs = require('fs');
//Define a function which accepts a URL endpoint and makes an http request
function getData(apiEndPoint) {
  //make the request. If it is successful, convert the received data into json format, then write the contents to a file.
  fetch(apiEndPoint)
  .then(response => response.json())
  .then(data => fs.writeFile('APIData.txt', JSON.stringify(data), err => {
    if (err) {
      console.error(err)
      return
    }
  }));
}
//define the url you want to use as a character string and store it in a variable
let SPHistorical = 'https://eodhistoricaldata.com/api/fundamentals/GSPC.INDX?api_token=<api-token>';
//plug the variable into the function and run the program.
getData(SPHistorical);
