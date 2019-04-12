const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url = ('https://api.darksky.net/forecast/96d548b9b4f8b3a5f01f94ec62ef50ae/' + latitude + ',' + longitude + '?units=si')

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to connect to Weather App service', undefined)
		} else if (body.error) {
			callback('Unable to find location. Please try again', undefined)
		} else {
			callback(undefined, body.daily.data[0].summary + ' Current temperature is : ' + body.currently.temperature + ' °C. The high today is ' + body.daily.data[0].temperatureHigh + '°C with a low of ' + body.daily.data[0].temperatureLow + '°C. There is ' + body.currently.precipProbability + '% chance of rain.')
		}
	})
}

module.exports = forecast;