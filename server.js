const { create } = require('domain');
const express = require('express');
const path = require('path');

const app = express();


const PORT = 3000;


app.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);


app.get('/', (req, res) => {
  res.sendFile(createPath('index'));
})

app.get('/contacts', (req, res) => {
  res.sendFile(createPath('contacts'));
})

app.get('/about-us', (req, res) => {
  res.redirect(createPath('/contacts'));
})

app.use((req, res) => {
  res
    .status(404)
    .sendFile(createPath('error'));
})
