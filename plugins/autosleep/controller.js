function AutoSleep($rootScope, $scope, $http, $q, SpeechService,AutoSleepService) {


    // Hide everything and "sleep"
    SpeechService.addCommand('sleep', function () {
        console.debug("Ok, going to sleep...");
        AutoSleepService.sleep();
        //$scope.$parent.focus = AutoSleepService.scope;
        $rootScope.focus = "sleep";

        //Adjust background color off app icons
        var non_active_app = angular.element(document.getElementsByClassName('app_icon'));
        non_active_app.removeClass('active_app');
    });

    //Wake up
    SpeechService.addCommand('wake_up', function () {
        console.debug("Waking up...");
        AutoSleepService.wake();
        //$scope.$parent.focus = AutoSleepService.scope;
        $rootScope.focus = "default";
    });

    //Remote wake up
    $scope.$on('autoSleep.wake', function(e, value) {
        if (!AutoSleepService.woke) {
		    AutoSleepService.wake();
        //$scope.$parent.focus = AutoSleepService.scope;
        $rootScope.focus = 'default';
	    }
	    console.debug('Controller Wake');
	    AutoSleepService.stopAutoSleepTimer();
    });

    //Remote sleep
    $scope.$on('autoSleep.sleep', function(e, value) {
        AutoSleepService.sleep();
        //$scope.$parent.focus = AutoSleepService.scope;
        $rootScope.focus = 'sleep';
        console.log($rootScope.focus);
	      console.debug('Controller Sleep');
    });
}

angular.module('Artemis')
    .controller('AutoSleep', AutoSleep);
