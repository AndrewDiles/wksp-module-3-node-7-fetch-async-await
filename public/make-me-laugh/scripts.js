const submitButton = document.getElementById('submit-button');
const jokeForm = document.getElementById('joke-form');
const type = document.getElementById('type');
const h4 = document.getElementById('jokeh4')

const handleAskServerForJoke = (event) => {
    event.preventDefault();
    submitButton.disabled = true;
    const data = {
        jokeType: type.value,
    };

    fetch('/getjoke', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.joke);
        jokeh4.innerText = `${data.joke}`;
        submitButton.disabled = false;
    });
}