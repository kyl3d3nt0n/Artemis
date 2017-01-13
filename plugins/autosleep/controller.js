function AutoSleep($http, $q, SpeechService,AutoSleepService, Focus) {


    // Hide everything and "sleep"
    SpeechService.addCommand('sleep', function () {
        console.debug("Ok, going to sleep...");
        AutoSleepService.sleep();
    });

    SpeechService.addCommand('wake_up', function() {
      console.debug("Waking up!");
      AutoSleepService.wake();
    });

}

angular.module('Artemis')
    .controller('AutoSleep', AutoSleep);
