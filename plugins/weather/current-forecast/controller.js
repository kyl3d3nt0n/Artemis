function CurrentForecast($scope, $interval, $http, GeolocationService) {

	var language = (typeof config.general.language !== 'undefined') ? config.general.language.substr(0, 2) : "en"
	var geoposition = {}
	var weather = {}

	weather.get = function () {
			return $http.jsonp('https://api.darksky.net/forecast/' + config.forecast.key_current_forecast + '/' +
						geoposition.coords.latitude + ',' + geoposition.coords.longitude + '?units=' +
						config.forecast.units + "&lang=" + language + "&callback=JSON_CALLBACK")
						.then(function (response) {
							return weather.forecast = response;
		});
	};

	//Returns the current forecast along with high and low tempratures for the current day
	weather.currentForecast = function () {
		if (weather.forecast === null) {
			return null;
		}
		weather.forecast.data.currently.day = moment.unix(weather.forecast.data.currently.time).format('ddd');
		weather.forecast.data.currently.temperature = parseFloat(weather.forecast.data.currently.temperature).toFixed(0);
		weather.forecast.data.currently.wi = "wi-forecast-io-" + weather.forecast.data.currently.icon;
		weather.forecast.data.currently.iconAnimation = weather.forecast.data.currently.icon;
		return weather.forecast.data.currently;
	}

	GeolocationService.getLocation({ enableHighAccuracy: true }).then(function (geopo) {
		geoposition = geopo;
		refreshWeatherData(geoposition);
		$interval(refreshWeatherData, config.forecast.refreshInterval * 60000 || 7200000)
	});

	function refreshWeatherData() {
		weather.get().then(function () {
			$scope.currentForecast = weather.currentForecast();
		}, function (err) {
			console.error(err)
		});
	}
}


angular.module('Artemis')
    .controller('CurrentForecast', CurrentForecast);
