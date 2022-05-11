// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

const TimeVsPassengers2018_2019 = require('../data/TimeVsPassengers2018-2019');
const TimeVsPassengers2019_2020 = require('../data/TimeVsPassengers2019-2020');
const TimeVsPassengers2020_2021 = require('../data/TimeVsPassengers2020-2021');
const MonthVsCount2018_2019 = require('../data/MonthVsCount2018-2019');
const MonthVsCount2019_2020 = require('../data/MonthVsCount2019-2020');
const MonthVsCount2020_2021 = require('../data/MonthVsCount2020-2021');
const StopVsRouteVsCount2018_2019 = require('../data/StopVsRouteVsCount2018-2019');
const StopVsRouteVsCount2019_2020 = require('../data/StopVsRouteVsCount2019-2020');
const StopVsRouteVsCount2020_2021 = require('../data/StopVsRouteVsCount2020-2021');
const RouteVsCount2018_2019 = require('../data/RouteVsCount2018-2019');
const RouteVsCount2019_2020 = require('../data/RouteVsCount2019-2020');
const RouteVsCount2020_2021 = require('../data/RouteVsCount2020-2021');
const StopVsCount2018_2019 = require('../data/StopVsCount2018-2019');
const StopVsCount2019_2020 = require('../data/StopVsCount2019-2020');
const StopVsCount2020_2021 = require('../data/StopVsCount2020-2021');
const BusVsCount2018_2019 = require('../data/BusVsCount2018-2019');
const BusVsCount2019_2020 = require('../data/BusVsCount2019-2020');
const BusVsCount2020_2021 = require('../data/BusVsCount2020-2021');

// ROUTING

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get('/api/transit', (req, res) => res.json(transitData));
  app.get('/api/TimeVsPassengers2018_2019', (req, res) => res.json(TimeVsPassengers2018_2019));
  app.get('/api/TimeVsPassengers2019_2020', (req, res) => res.json(TimeVsPassengers2019_2020));
  app.get('/api/TimeVsPassengers2020_2021', (req, res) => res.json(TimeVsPassengers2020_2021));

  app.get('/api/MonthVsCount2018_2019', (req, res) => res.json(MonthVsCount2018_2019));
  app.get('/api/MonthVsCount2019_2020', (req, res) => res.json(MonthVsCount2019_2020));
  app.get('/api/MonthVsCount2020_2021', (req, res) => res.json(MonthVsCount2020_2021));

  app.get('/api/StopVsRouteVsCount2018_2019', (req, res) => res.json(StopVsRouteVsCount2018_2019));
  app.get('/api/StopVsRouteVsCount2019_2020', (req, res) => res.json(StopVsRouteVsCount2019_2020));
  app.get('/api/StopVsRouteVsCount2020_2021', (req, res) => res.json(StopVsRouteVsCount2020_2021));

  app.get('/api/RouteVsCount2018_2019', (req, res) => res.json(RouteVsCount2018_2019));
  app.get('/api/RouteVsCount2019_2020', (req, res) => res.json(RouteVsCount2019_2020));
  app.get('/api/RouteVsCount2020_2021', (req, res) => res.json(RouteVsCount2020_2021));

  app.get('/api/StopVsCount2018_2019', (req, res) => res.json(StopVsCount2018_2019));
  app.get('/api/StopVsCount2019_2020', (req, res) => res.json(StopVsCount2019_2020));
  app.get('/api/StopVsCount2020_2021', (req, res) => res.json(StopVsCount2020_2021));

  app.get('/api/BusVsCount2018_2019', (req, res) => res.json(BusVsCount2018_2019));
  app.get('/api/BusVsCount2019_2020', (req, res) => res.json(BusVsCount2019_2020));
  app.get('/api/BusVsCount2020_2021', (req, res) => res.json(BusVsCount2020_2021));
}
