function TVShows($scope, $http, $interval) {

	getTVShows()
	$interval(getTVShows, (config.tvshows ? config.tvshows.refreshInterval * 60000 : 7200000));

	function getTVShows() {
		$scope.tvshows = [];
		if (config.tvshows) {
            // for each show in config, create http request
			angular.forEach(config.tvshows.shows, function (show) {
				$http.get('http://epguides.frecar.no/show/' + show.replace(/\s|\./g, '') + '/next/')
                    .catch(function () { // if no response for a show add blank response, log error
	//console.log("No response for show: " + show);
	return "";
})
                    .then(function (response) {
	if (response != "") {
		$scope.tvshows.push(response)
		//console.log($scope.tvshows);
		//Date of show
		//console.log(response.data.episode.release_date);
		//Title of show
		//console.log(response.data.episode.show.title);
		//Title of episode
		//console.log(response.data.episode.title);
		//console.log(response);
	}
})
			});
		}
	}
}

angular.module('Artemis')
    .controller('TVShows', TVShows);
