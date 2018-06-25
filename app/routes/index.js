var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    
    app.route('/nearAddresses')
        .get(api.nearAddresses);

    app.route('/currentAddress')
        .get(api.currentAddress);
        
    app.all('/*', function(req, res) {
        res.send({result: true});
    });
};