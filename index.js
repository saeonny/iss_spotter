//run main fetch

const ip = "70.51.223.200";
const location = { latitude: 43.83932876586914, longitude: -79.38272857666016 };

const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes,nextISSTimesForMyLocation } = require('./iss');

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


// const timeConverter = function(times) {
//   for (let time of times) {
//     const datetime = new Date(0);
//     datetime.setUTCSeconds(time.risetime);
//     const duration = pass.duration;
//     console.log(`Next pass at ${datetime} for ${duration} seconds!`);

//   }
// };

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});