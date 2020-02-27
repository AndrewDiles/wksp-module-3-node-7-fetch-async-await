const request = require('request-promise');

const getGeekJoke = async () => {
    try {
        let geekCulture = {
            uri: 'https://geek-jokes.sameerkumar.website/api',
            headers: {
                "Accept": "application/json"
            },
            json: true
        };
        let data = await request(geekCulture);
        console.log(data);
        return data;
    } catch(reject) {console.log(reject); return reject;}
}
getGeekJoke();