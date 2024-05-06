function calculate() {
    // JavaScript function to retrieve values from inputs, 
    // perform calculation, and display result.
    // This is a placeholder, actual calculation logic will depend on the requirement.
    var value1 = document.getElementById('input1').value;
    var value2 = document.getElementById('input2').value;
    var result = parseInt(value1) * 5; // Example calculation
    document.getElementById('result').textContent = result;
  }


  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const searchParams = new URLSearchParams();

    for (const pair of formData) {
        searchParams.append(pair[0], pair[1]);
    }

    fetch('sendEmail.php', {
        method: 'POST',
        body: searchParams,
    })
    .then((response) => response.text())
    .then((responseText) => {
        // Handle the response from the server
        alert(responseText);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

