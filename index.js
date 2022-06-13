//run main fetch

const ip = "70.51.223.200";
const location = { latitude: 43.83932876586914, longitude: -79.38272857666016 };

const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP(ip,(error,data)=>{
//   if(error) {
//     console.log("error appeared", error);
//   }
//   if(!error) {
//     console.log(data);
//   }
// })


// fetchISSFlyOverTimes(location,(error,data)=> {
//   if(error) {
//     console.log("error!",error);
//     return;
//   }
//   console.log(data);
// })