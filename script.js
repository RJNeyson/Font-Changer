// script.js
document.addEventListener("DOMContentLoaded", function () {
    const textLayer = document.getElementById("textLayer");
    const fontSelect = document.getElementById("fontSelect");

    // Fetch fonts from Photopea's API
    fetch('https://api.photopea.com/fonts')
        .then(response => response.json())
        .then(data => {
            // Populate dropdown with font names
            data.forEach(font => {
                const option = document.createElement('option');
                option.textContent = font.name;
                option.value = font.name;
                fontSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching fonts:', error);
        });

    // Event listener for font selection
    fontSelect.addEventListener("change", function () {
        const selectedFont = fontSelect.value;
        textLayer.style.fontFamily = selectedFont;
    });
});
