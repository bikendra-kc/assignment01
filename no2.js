const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const persons = [
  { 
    "id": 1,
    "name": "Kiran Rana", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Pratik Bhusal", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Jon Doe", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
];

app.use(bodyParser.json());

// GET all persons
app.get('/persons', (req, res) => {
  res.json(persons);
});

// GET a single person by ID
app.get('/persons/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const person = persons.find(person => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

// POST a new person
app.post('/persons', (req, res) => {
  const person = req.body;
  person.id = Math.floor(Math.random() * 1000000);
  persons.push(person);
  res.status(201).json(person);
});

// PUT or update an existing person by ID
app.put('/persons/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const person = req.body;
  const index = persons.findIndex(person => person.id === id);
  if (index !== -1) {
    persons[index] = { ...person, id };
    res.json(persons[index]);
  } else {
    res.status(404).end();
  }
});

// DELETE a person by ID
app.delete('/persons/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = persons.findIndex(person => person.id === id);
  if (index !== -1) {
    persons.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).end();
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
