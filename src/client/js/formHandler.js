function handleSubmit(event) {
    event.preventDefault()
    document.getElementById('status').innerHTML = ''
    document.getElementsByClassName('info')[0].innerHTML = ''
    document.getElementsByClassName('info')[1].innerHTML = ''
    document.getElementsByClassName('info')[2].innerHTML = ''
    document.getElementsByClassName('info')[3].innerHTML = ''
    document.getElementsByClassName('info')[4].innerHTML = ''

    // checl if the user entered a valid url 
    var input = document.getElementById('userInput').value;
    if(Client.validURL(input))
    {   document.getElementById('status').innerHTML = 'Loading...'
       
        fetch('http://localhost:8081/url', {
            method:"POST",
            credentials:"same-origin",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({input:input})
        })
        .then(res => res.json())
        .then(function(res) {
            // Check if the API Fetch worked 
            if (res.agreement){
                document.getElementById('status').innerHTML = 'Form Results:'
                document.getElementsByClassName('info')[0].innerHTML = `agreement is ${res.agreement}`
                document.getElementsByClassName('info')[1].innerHTML = `confidence is ${res.confidence}`
                document.getElementsByClassName('info')[2].innerHTML = `irony is ${res.irony}`
                document.getElementsByClassName('info')[3].innerHTML = `model is ${res.model}`
                document.getElementsByClassName('info')[4].innerHTML = `score_tag is ${res.score_tag}`
            }
            else {
                alert('please check your URL and API-key again');
                document.getElementById('status').innerHTML = ''
            }
        })
    }
    else{
        document.getElementById('status').innerHTML = '';
        alert('please enter valid URL');
    }
}

export { handleSubmit }
