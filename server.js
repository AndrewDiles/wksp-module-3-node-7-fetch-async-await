'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const request = require('request-promise');

const PORT = process.env.PORT || 8000;



const getDadJoke = async () => {
    let gimmeJoke = {
        uri: 'https://icanhazdadjoke.com/',
        headers: {
            "Accept": "application/json"
        },
        json: true
    };
    let joke = await request(gimmeJoke);
    // console.log(joke.joke);
    return joke.joke;
}
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
        // console.log(data.value);
        return data.value;
    } catch(reject) {console.log(reject); return reject;}
}
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
        // console.log(data);
        return data;
    } catch(reject) {console.log(reject); return reject;}
}

const handleGetJoke = async (req, res) => {
    console.log(req.body.jokeType);
    let type = req.body.jokeType;
    let joke = '';
    if (type === 'dad') joke = await getDadJoke();
    else if (type === 'geek') joke = await getGeekJoke();
    else if (type === 'tronald') joke = await getTronaldDump();
    else joke = "Houston, we have a problem...";
    console.log(joke);
    res.send({ 'joke': joke })
}

express()
    .use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
	.use(morgan('dev'))
	.use(express.static('public'))
    .use(bodyParser.json())
    .use(express.urlencoded({extended: false}))
    .set('view engine', 'ejs')


    

    // endpoints
    .post('/getjoke', handleGetJoke)
    .listen(PORT, () => console.log(`Listening on port ${PORT}`));




