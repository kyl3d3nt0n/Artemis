function Search($scope, $http, SpeechService, $rootScope, Focus) {
<<<<<<< HEAD

    var searchYouTube = function (query) {
        return $http({
            url: 'https://www.googleapis.com/youtube/v3/search',
            method: 'GET',
            params: {
                'part': 'snippet',
                'order': 'relevance',
                'q': query,
                'type': 'video',
                'videoEmbeddable': 'true',
                'videoSyndicated': 'true',
                //Sharing this key in the hopes that it wont be abused
                'key': config.youtube.key
            }
        });
    }
=======
	var searchYouTube = function (query) {
		return $http({
			url: 'https://www.googleapis.com/youtube/v3/search',
			method: 'GET',
			params: {
				'part': 'snippet',
				'order': 'relevance',
				'q': query,
				'type': 'video',
				'videoEmbeddable': 'true',
				'videoSyndicated': 'true',
                //Sharing this key in the hopes that it wont be abused 
				'key': config.youtube.key
			}
		});
	}
>>>>>>> evancohen/master

	var stopVideo = function() {
		var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
		iframe.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	}

    //Search for a video
<<<<<<< HEAD
    SpeechService.addCommand('video_search', function (query) {
        searchYouTube(query).then(function (results) {
            //Stop SoundCloud
            document.getElementById('player').pause();
=======
	SpeechService.addCommand('video_search', function (query) {
		searchYouTube(query).then(function (results) {
>>>>>>> evancohen/master
            //Set cc_load_policy=1 to force captions
			$scope.video = 'https://www.youtube.com/embed/' + results.data.items[0].id.videoId + '?autoplay=1&controls=0&iv_load_policy=3&enablejsapi=1&showinfo=0';
			Focus.change("video");
		});
	});

<<<<<<< HEAD
    $rootScope.$on('focus', function (targetScope, newFocus, oldFocus) {
        if(oldFocus == "video" && newFocus != "video"){
            stopVideo();
        }
    })
=======
    //Stop video
	SpeechService.addCommand('video_stop', function () {
		Focus.change("default");
		stopVideo();
	});

	$rootScope.$on('focus', function (targetScope, newFocus, oldFocus) {
		if(oldFocus == "video" && newFocus != "video"){
			stopVideo();
		}
	})
>>>>>>> evancohen/master

}

angular.module('Artemis')
    .controller('Search', Search);
