var https = require('https');

var app = null;

module.exports = {

    domain: 'gApi',

    init: function (application) {
        app = application;
    },

    getName: function () {
        return require('../../package.json').name;
    },

    getVersion: function () {
        return require('../../package.json').version;
    },

    getConfig: function () {
        return require('../cfg/config.js');
    },

    callApi: function (server, ctx, serviceName, fnName, fields, callback) {

        // serviceName = 'place',
        // fnName = 'nearbysearch',
        // fields = location=-33.8670522,151.1957362&radius=500&types=food&name=cruise

        // callsTo: https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=cruise&key=XXX

        var settingsStore = server.db.createStore('settings');
        settingsStore.get(function (x) {
            x.query({
                domain: 'gApi'
            });
            x.single();
            x.cached();
        }, function (err, settings) {
            if (err)
                return callback(err, null);

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