//run main fetch

const ip = "70.51.223.200";

const { fetchMyIP, fetchCoordsByIP } = require('./iss');

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
