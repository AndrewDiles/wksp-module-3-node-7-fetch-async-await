const request = require('request-promise');

const getTronaldDump = async () => {
    try {
        let trumpMe = {
            uri: 'https://api.tronalddump.io/random/quote',
            headers: {
                "Accept": "application/json"
            },
            json: true
        };
        let data = await request(trumpMe);
        console.log(data.value);
        return data.value;
    } catch(reject) {console.log(reject); return reject;}
}

getTronaldDump();