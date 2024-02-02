const express = require('express');
const app = express();
const path = require('path');
const babel = require('@babel/core');

// Setează directorul static pentru resursele clientului
app.use(express.static(path.join(__dirname, '../client')));

// Ruta pentru pagina principală (Home)
app.get('/', (req, res) => {
  const jsxPath = path.join(__dirname, '../client/src/components', 'Home.jsx');
  const jsCode = babel.transformFileSync(jsxPath, { presets: ['@babel/preset-react'] }).code;
  res.type('application/javascript').send(jsCode);
});

// Alte rute pentru paginile tale
app.get('/test', (req, res) => {
  const jsxPath = path.join(__dirname, '../client/src/components', 'Test.jsx');
  const jsCode = babel.transformFileSync(jsxPath, { presets: ['@babel/preset-react'] }).code;
  res.type('application/javascript').send(jsCode);
});

app.get('/about', (req, res) => {
  const jsxPath = path.join(__dirname, '../client/src/components', 'About.jsx');
  const jsCode = babel.transformFileSync(jsxPath, { presets: ['@babel/preset-react'] }).code;
  res.type('application/javascript').send(jsCode);
});

app.get('/contact', (req, res) => {
  const jsxPath = path.join(__dirname, '../client/src/components', 'Contact.jsx');
  const jsCode = babel.transformFileSync(jsxPath, { presets: ['@babel/preset-react'] }).code;
  res.type('application/javascript').send(jsCode);
});

// Ascultă pe un anumit port
const port = 3001;
app.listen(port, () => {
  console.log(`Serverul rulează pe portul ${port}`);
});
