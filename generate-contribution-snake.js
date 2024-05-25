const fs = require('fs');
const fetch = require('node-fetch');

const username = 'harshit787898'; // Replace with your GitHub username
const snakeURL = `https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake.svg`;

fetch(snakeURL)
  .then(response => response.text())
  .then(data => fs.writeFileSync('contribution-snake.svg', data))
  .catch(error => console.error('Error fetching contribution snake:', error));
