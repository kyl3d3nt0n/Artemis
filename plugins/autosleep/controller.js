function AutoSleep($http, $q, SpeechService,AutoSleepService) {

	SpeechService.addCommand('wake', function () {
		console.debug("Waking Up!");
		AutoSleepService.wake();
	});

    // Hide everything and "sleep"
	SpeechService.addCommand('sleep', function () {
		console.debug("Ok, going to sleep...");
		AutoSleepService.sleep();
	});

}

angular.module('Artemis')
    .controller('AutoSleep', AutoSleep);
