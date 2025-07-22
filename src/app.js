// This file contains the main JavaScript logic for the online lottery application.
// It initializes the application, fetches the lottery results, and updates the HTML to display the results.

import { lotteryResults } from './lotteryResults.js';

document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('lottery-results');
    displayResults(lotteryResults);
});

function displayResults(results) {
    resultsContainer.innerHTML = '';
    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('result');
        resultElement.textContent = `Lottery Number: ${result.number} - Date: ${result.date} - Prize: ${result.prize}`;
        resultsContainer.appendChild(resultElement);
    });
}
