// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    
    try {
        let result = await request('http://api.open-notify.org/iss-now.json');
        result = await JSON.parse(result);
        return {lng: result.iss_position.longitude, lat: result.iss_position.latitude};
    } catch(reject) {console.log(reject); return reject;}
}

getIssPosition();
getIssPosition().then(schmeckles => {console.log(schmeckles)});