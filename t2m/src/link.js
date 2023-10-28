document.addEventListener('DOMContentLoaded', function() {
    // Get the buttons
    const magnetButton = document.querySelector('.fa-magnet');
    const boltButton = document.querySelector('.fa-bolt');

    // Define the URLs for each button
    const magnetURL = 'https://tools.helalk.com/h2m/';
    const boltURL = 'https://tools.helalk.com/t2m/';

    // Add click event listeners to the buttons
    magnetButton.addEventListener('click', function() {
        window.location.href = magnetURL;
    });

    boltButton.addEventListener('click', function() {
        window.location.href = boltURL;
    });
});
