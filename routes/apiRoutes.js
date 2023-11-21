const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const fileName = './db/db.json';

router.get('/notes', (req, res) => {
  const data = fs.readFileSync(fileName, 'utf8');
  const parsedData = JSON.parse(data);
  res.status(200).json(parsedData);
});

router.post('/notes', (req, res) => {
  const {title, text} = req.body;
  const data = fs.readFileSync(fileName, 'utf8');
  const parsedData = JSON.parse(data);
  const newNote = {
    id: parsedData.length + 1,
    title,
    text,
  };
  parsedData.push(newNote);
  fs.writeFileSync(fileName, JSON.stringify(parsedData, null, 2));
  res.status(200).json({message: 'Note added successfully', note: newNote});
});

// router.delete('/noes', (req, res) => {

// })

module.exports = router;