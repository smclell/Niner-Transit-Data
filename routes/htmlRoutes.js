// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

const path = require('path');

// ROUTING

module.exports = (app) => {
  // => HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content

  app.get('/dashboard-2018', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dashB-2018.html'));
  });
  app.get('/dashboard-2019', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dashB-2019.html'));
  });
  app.get('/dashboard-2020', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dashB-2020.html'));
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
