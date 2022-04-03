const { animals } = require('../data/animals.json');
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../lib/animals');
jest.mock('fs');

test('Filter By Query', () => {
  const startingAnimals = [
    {
      id: '3',
      name: 'Erica',
      species: 'gorilla',
      diet: 'omnivore',
      personalityTraits: ['quirky', 'rash'],
    },
    {
      id: '4',
      name: 'Noel',
      species: 'bear',
      diet: 'carnivore',
      personalityTraits: ['impish', 'sassy', 'brave'],
    },
  ];

  const updatedAnimals = filterByQuery({ diet: 'omnivore' }, startingAnimals);
  expect(updatedAnimals.length).toEqual(1);
});

test('Find By Id', () => {
  const startingAnimals = [
    {
      id: '3',
      name: 'Erica',
      species: 'gorilla',
      diet: 'omnivore',
      personalityTraits: ['quirky', 'rash'],
    },
    {
      id: '4',
      name: 'Noel',
      species: 'bear',
      diet: 'carnivore',
      personalityTraits: ['impish', 'sassy', 'brave'],
    },
  ];

  const updatedAnimals = findById('3', startingAnimals);
  expect(updatedAnimals.name).toEqual('Erica');
});

test('create new animal', () => {
  const body = { id: '4', name: 'Noel', diet: 'carnivore' };
  const animal = createNewAnimal(body, animals);
  expect(animal.name).toEqual('Noel');
  expect(animal.id).toEqual('4');
  expect(animal.diet).toEqual('carnivore');
});

test('validate animal', () => {
  const animal = {
    id: '3',
    name: 'Erica',
    species: 'gorilla',
    diet: 'omnivore',
    personalityTraits: ['quirky', 'rash'],
  };

  const invalidAnimal = {
    id: '3',
    name: 'Erica',
    species: 'gorilla',
    diet: 'omnivore',
  };
  const result1 = validateAnimal(animal);
  const result2 = validateAnimal(invalidAnimal);
  expect(result1).toBe(true);
  expect(result2).toBe(false);
});
