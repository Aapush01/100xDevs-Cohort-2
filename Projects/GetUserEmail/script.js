document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('emailInput').value;

    fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'email=' + encodeURIComponent(email)
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            alert('Email submitted successfully!');
        } else {
            alert('Error submitting email.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting email.');
    });
});
