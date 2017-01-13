function AutoSleep($http, $q, SpeechService,AutoSleepService, Focus) {


    // Hide everything and "sleep"
    SpeechService.addCommand('sleep', function () {
        console.debug("Ok, going to sleep...");
        AutoSleepService.sleep();
    });
}

angular.module('Artemis')
    .controller('AutoSleep', AutoSleep);
