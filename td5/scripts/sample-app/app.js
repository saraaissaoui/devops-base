const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Route racine
app.get('/', (req, res) => {
  res.send('DevOps Labs!');
});

// Petite fonction pour échapper les caractères dangereux
function sanitize(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Route /name/:name
app.get('/name/:name', (req, res) => {
  const rawName = req.params.name;          // ce que l’utilisateur envoie
  const safeName = sanitize(rawName);       // on nettoie
  res.send(`Hello, ${safeName}!`);          // on renvoie la version safe
});

module.exports = app;

