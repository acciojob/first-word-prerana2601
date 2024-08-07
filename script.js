// script.js

function firstWord(str) {
    // Handle the case of an empty string
    if (str === '') {
        return '';
    }

    // Find the index of the first space
    const spaceIndex = str.indexOf(' ');

    // If a space is found, return the substring up to the first space
    if (spaceIndex !== -1) {
        return str.substring(0, spaceIndex);
    }

    // If no space is found, return the entire string
    return str;
}

function extractFirstWord() {
    // Get the user input
    const inputString = document.getElementById('inputString').value;
    const resultElement = document.getElementById('result');

    // Compute the first word
    const result = firstWord(inputString);

    // Display the result
    resultElement.textContent = result;
}
