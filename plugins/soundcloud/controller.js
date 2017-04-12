function Soundcloud($scope, $http, SoundCloudService, SpeechService, Focus) {

    //Initialize SoundCloud
	SoundCloudService.init();

    //SoundCloud search and play
	SpeechService.addCommand('sc_play', function (query) {
		SoundCloudService.searchSoundCloud(query).then(function (response) {
			if (response[0].artwork_url) {
				$scope.scThumb = response[0].artwork_url.replace("-large.", "-t500x500.");
			} else {
				$scope.scThumb = 'http://i.imgur.com/8Jqd33w.jpg?1';
			}
			$scope.scWaveform = response[0].waveform_url;
			$scope.scTrack = response[0].title;
			Focus.change("sc");
			SoundCloudService.play();
		});
	});

    //SoundCloud stop
<<<<<<< HEAD
    SpeechService.addCommand('sc_pause', function () {
        SoundCloudService.pause();
        Focus.change("default");
    });

    //SoundCloud resume
    SpeechService.addCommand('sc_resume', function () {
        SoundCloudService.play();
        Focus.change("sc");
    });

=======
	SpeechService.addCommand('sc_pause', function () {
		SoundCloudService.pause();
		Focus.change("default");
	});
    //SoundCloud resume
	SpeechService.addCommand('sc_resume', function () {
		SoundCloudService.play();
		Focus.change("sc");
	});
>>>>>>> evancohen/master
    //SoundCloud replay
	SpeechService.addCommand('sc_replay', function () {
		SoundCloudService.replay();
		Focus.change("sc");
	});
}

angular.module('Artemis')
    .controller('Soundcloud', Soundcloud);
