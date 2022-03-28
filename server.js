const express = require('express');
const app = express();
const { animals } = require('./data/animals.json');

function filterByQuery(query, animalsArray) {
  let personalityTraitsArray = [];
  // Note that we save the animalsArray as filteredResults here:
  let filteredResults = animalsArray;

  if (query.personalityTraits) {
    // Save personalityTraits as a dedicated array.
    // If personalityTraits is a string, place it into a new array and save.
    if (typeof query.personalityTraits === 'string') {
      personalityTraitsArray = [query.personalityTraits];
    } else {
      personalityTraitsArray = query.personalityTraits;
    }
    console.log(personalityTraitsArray);
    
    // Loop through each trait in the personalityTraits array:
    personalityTraitsArray.forEach(trait => {
      filteredResults = filteredResults.filter(animal => animal.personalityTraits.indexOf(trait) !== -1);
    });
  }
  if (query.diet) {
    filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
  }
  if (query.species) {
    filteredResults = filteredResults.filter(animal => animal.species === query.species);
  }
  if (query.name) {
    filteredResults = filteredResults.filter(animal => animal.name === query.name);
  }

  if (query.personalityTraits) {
    filteredResults = filteredResults.filter(animal => animal.personalityTraits.includes(query.personalityTraits));
  }

  return filteredResults;
}

app.get('/api/animals', (req, res) => {
  let results = animals;
  console.log(req.query);

  results = filterByQuery(req.query, results);
  res.send(results);
});

app.listen(3001, () => {
  console.log('Server running at http:127.0.0.1:3001');
});
