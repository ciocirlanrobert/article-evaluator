function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('article').value

    if(!formText) return;
    
    let reqBody = {
        theText: formText
    };

    fetch('/test', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById("result-article").innerHTML = res.text;
        document.getElementById('polarity').innerHTML = res.polarity;
        document.getElementById('subjectivity').innerHTML = res.subjectivity;
    })
}

export { handleSubmit }