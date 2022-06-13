//contains logic for fetching data from each API endpoint

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require("request");

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};


const fetchCoordsByIP = function(ip,callback) {
  const url = 'https://api.ipbase.com/v2/info?apikey=sOMbkXchSpLLP6niglm11aPQM48nyMJptu0H1Mgu&ip=' + ip;
  request(url,(error,response,body)=>{
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body).data;
    const latitude = data.location.latitude;
    const longitude = data.location.longitude;
    const location = {latitude : latitude, longitude: longitude};
    callback(null,location);
    return;
  });
  
};

const fetchISSFlyOverTimes = function(coords, callback) {
  //const lat = 43.83932876586914;
  //const long = -79.38272857666016
  const lat = coords.latitude;
  const long = coords.longitude;
  const URL = `https://iss-pass.herokuapp.com/json/?lat=${lat}&lon=${long}`

  request(URL,(error,response,body) => {
    if(error){
      callback(error,null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching ISS pass time: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body).response
    callback(null,data);
  })

};



module.exports = { fetchMyIP , fetchCoordsByIP, fetchISSFlyOverTimes };