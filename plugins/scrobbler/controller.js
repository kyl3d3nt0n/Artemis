function Scrobbler($scope, $interval, ScrobblerService) {

<<<<<<< HEAD
    var getScrobblingTrack = function () {
        ScrobblerService.getCurrentTrack().then(function (track) {
            $scope.track = track;
        });
    }

    if (typeof config.lastfm !== 'undefined' && typeof config.lastfm.key !== 'undefined' && config.lastfm.user !== 'undefined') {
        $interval(getScrobblingTrack, config.lastfm.refreshInterval * 60000 || 1800000)
    }
=======
	var getScrobblingTrack = function () {
		ScrobblerService.getCurrentTrack().then(function (track) {
			$scope.track = track;
		});
	}
    
	if (typeof config.lastfm !== 'undefined' && typeof config.lastfm.key !== 'undefined' && config.lastfm.user !== 'undefined') {
		$interval(getScrobblingTrack, config.lastfm.refreshInterval * 60000 || 1800000)
	}
>>>>>>> evancohen/master
}

angular.module('Artemis')
    .controller('Scrobbler', Scrobbler);
