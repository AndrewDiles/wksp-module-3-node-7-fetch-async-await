const request = require('request-promise');

const getDadJoke = async () => {
        let gimmeJoke = {
            uri: 'https://icanhazdadjoke.com/',
            headers: {
                "Accept": "application/json"
            },
            json: true
        };
        let joke = await request(gimmeJoke);
        console.log(joke.joke);
        return joke.joke;
}

getDadJoke();
// getDadJoke().then(pickle => console.log(pickle));  If I use this it is actually console logging a different interation of the call (i.e. not the first joke).