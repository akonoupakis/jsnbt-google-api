# jsnbt-google-api
> a google api wrapper for the jsnbt cms

![VERSION](https://img.shields.io/npm/v/jsnbt-google-api.svg)
![DOWNLOADS](https://img.shields.io/npm/dt/jsnbt-google-api.svg)
[![ISSUES](https://img.shields.io/github/issues-raw/akonoupakis/jsnbt-google-api.svg)](https://github.com/akonoupakis/jsnbt-google-api/issues)
![LICENCE](https://img.shields.io/npm/l/jsnbt-google-api.svg)

[![NPM](https://nodei.co/npm/jsnbt-google-api.png?downloads=true)](https://nodei.co/npm/jsnbt-google-api/)


## usage

```js
var serviceName = 'place';
var fnName = 'nearbysearch';
var options = {
    location: '-33.8670522,151.1957362',
    radius: '500',
    types: 'food',
    name: 'cruise'
};

var gApi = require('jsnbt-google-api');

gApi.callApi(server, ctx, serviceName, fnName, options, function (err, data) {
    if (err)
        ctx.error(500, err);
    else {
        ctx.write(data);
        ctx.end();
    }
});
```
or invoked by REST in:
```
/jsnbt-api/gApi/place/nearbysearch?location=-33.8670522,151.1957362&radius=500&types=food&name=cruise
```


## license
```
The MIT License (MIT)

Copyright (c) 2015 akonoupakis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```