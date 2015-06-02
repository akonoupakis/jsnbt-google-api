var https = require('https');

var app = null;

module.exports = {

    domain: 'gApi',

    init: function (application) {
        app = application;
    },

    getConfig: function () {
        return require('../cfg/config.js');
    },

    getVersion: function () {
        return require('../../package.json').version;
    },

    callApi: function (server, ctx, serviceName, fnName, fields, callback) {

        // serviceName = 'place',
        // fnName = 'nearbysearch',
        // fields = location=-33.8670522,151.1957362&radius=500&types=food&name=cruise

        // callsTo: https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=cruise&key=XXX

        ctx.dpd.settings.getCached({
            domain: 'gApi'
        }, function (results, err) {
            if (err) {
                callback(err, null);
            }
            else {
                var settings = results.length > 0 ? results[0] : undefined;
                if (settings && settings.data && settings.data.apiKey) {
                    var apiKey = settings.data.apiKey;

                    var queryString = [];

                    for (var name in fields)
                        queryString.push(name + '=' + fields[name]);

                    queryString.push('key=' + apiKey);

                    var request = https.request({
                        host: 'maps.googleapis.com',
                        port: 443,
                        path: '/maps/api/' + serviceName + '/' + fnName + '/json?' + queryString.join('&') + '&key=' + apiKey,
                        method: 'GET'
                    }, function (res) {

                        var data = '';
                        res.on('data', function (d) {
                            data += d;
                        });

                        res.on('end', function () {
                            callback(null, data);
                        });

                    });

                    request.on('error', function (error) {
                        callback(error, null);
                    });

                    request.end();
                }
                else {
                    callback(new Error('ApiKey undefined'), null);
                }
            }

        });

    },

    // sample url: /jsnbt-api/gApi/place/nearbysearch?location=-33.8670522,151.1957362&radius=500&types=food&name=cruise
    routeApi: function (server, ctx, serviceName, fnName, fields, files, next) {
    
        this.callApi(server, ctx, serviceName, fnName, fields, function (err, results) {
            if (err) {
                ctx.error(500, err);
            }
            else {
                ctx.write(results);
                ctx.end();
            }
        });

    }

};