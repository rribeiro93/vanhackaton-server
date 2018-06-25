var googleMapsClient = require('@google/maps').createClient({
    key: '' ////Put ypur google maps client key here
});

var api = {}

api.nearAddresses = function (req, res) {

    if (req.query.currentPosition) {

        let currentPosition = JSON.parse(req.query.currentPosition);

        googleMapsClient.places({
            type: 'restaurant',
            radius: 1000,
            location: currentPosition.lat + ',' + currentPosition.lng
        }, (err, response) => {
            if (!err) {
                res.json(response.json.results);
            }else{
                res.json({ result: 'error', msg: err });
            }
        });

    } else {
        res.json({ result: 'error', msg: 'Current position required' });
    }
};

api.currentAddress = function (req, res) {

    if (req.query.currentPosition) {

        let currentPosition = JSON.parse(req.query.currentPosition);

        googleMapsClient.reverseGeocode({
            latlng: currentPosition.lat + ',' + currentPosition.lng
        }, (err, response) => {
            if (!err) {
                console.log(response.json.results);
                res.json(response.json.results); 
            } else {
                res.json({ result: 'error', msg: err });
            }
        });

    } else {
        res.json({ result: 'error', msg: 'Current position required' });
    }
};

module.exports = api;