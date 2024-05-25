const fs = require('fs');
const fetch = require('node-fetch');

const username = 'harshit787898'; // Replace with your GitHub username
const activityGraphURL = `https://activity-graph.herokuapp.com/graph?username=${username}&theme=react-dark`;

fetch(activityGraphURL)
  .then(response => response.text())
  .then(data => fs.writeFileSync('activity-graph.svg', data))
  .catch(error => console.error('Error fetching activity graph:', error));
