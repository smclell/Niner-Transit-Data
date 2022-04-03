var plotly = require('Plotly')('testingforproject78694','6tIVjudhCZ8oa70ngRtf');
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://ForTesting:WackyFacts69@testing.1hgcc.mongodb.net/test3.0?retryWrites=true&w=majority', function (err, db) {
    var data = db.db('testing').collection('test3.0');
    data.find().toArray(function(err, test) {
        var testing = formatTestData(test)
        var data = [{ x: testing.Time, y: testing.Riders, type: 'bar' }];
        var graphOptions = {
            'filename': 'testingGraph',
            'fileopt': 'overwrite',
            'layout': {
                'width': '600',
                'height': '600'
            },
            'world_readable': true
        };
        plotly.plot(data, graphOptions, function (err, msg) {
            if (err) return console.log(err);
            console.log(msg);
        });
    });
});
function formatTestData(data) {
    // C:\Users\seanm\Documents\GitHub\Niner-Transit-Data\test.js
    var Riders = [];
    var Time = [];
    for (var i = 0; i < data.length; i++) {
        Riders.push(data[i].Riders);
        Time.push(data[i].Time);
    }
    return { Riders: Riders, Time: Time };
}