// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

const path = require('path');

// ROUTING

module.exports = (app) => {
  // => HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content

  app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/graphPage.html'));
  });
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
  app.get('/graphs', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/TestingGraph.html'));
  });
  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/aboutPage.html'));
  });

};
