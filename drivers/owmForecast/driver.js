"use strict";
// need Homey module, see SDK Guidelines
const Homey = require('homey');

class owmForecastDriver extends Homey.Driver {

    onPair(socket) {

        let devices = [
            {
                "name": "My Device",
                "data": { "id": "abcd" },
                "settings": {
                    "APIKey": 'APIKey',
                    "GEOlocationCity": 'GEOlocationCity',
                    "GEOlocationZip": 'GEOlocationZip',
                    "ForecastInterval": 'ForecastInterval'
                }
            }
        ]

        // this is called when the user presses save settings button in pair.html
        socket.on('get_devices', (device_data, callback) => {
            devices = device_data;
            callback(null, devices);
        });

        // this happens when user clicks away the pairing windows
        socket.on('disconnect', () => {
            this.log("OpenWeatherMap - Pairing is finished (done or aborted) ");
        })

    } // end onPair

}
module.exports = owmForecastDriver;
