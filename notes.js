// event listener on button for drop down.  WIll activate a function: 

// so clicking submit wants to reload the page to the endpoint with the new data from the drop-down

const handleSubmit = (event) => {   // we pass the event to the function
event.preventDefault(); //prevents site from refreshing

const type = document.getElementById('IDoftheDropdown').value;

fetch('/jokes', {
    method: 'POST', 
    headers: { 
        'Accept': 'application/json',
        'Content-type': 'application/json'


        },
        body: { type: type }    // data of the body comes from the form
        // body: JSON.stringify({type: type })    // may need to do this depending on how the information is coming in
    })
    // the above goes to the server, so we need to give it time to return with a response
    .then(res)
    // or .then(JSON.parse(res))
    .then (data => {
        //check status
        // if it's 200
            // render the joke.  Create a div on HTML side, grab it by ID, add inner text
    })
}



// server side:
// have a .post for /jokes, its handle function looks at req.body.type and sends back the correct joke.



// server side: ?
// res.status(200).send({status: 200, data: ...})