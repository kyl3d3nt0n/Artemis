<<<<<<< HEAD
function Timer($rootScope, $scope, TimerService, SpeechService) {
=======
function Timer($scope, TimerService, SpeechService, Focus) {
>>>>>>> evancohen/master

    // Start timer
    SpeechService.addCommand('timer_start', function (duration) {
        console.debug("Starting timer");
<<<<<<< HEAD
        //$scope.$parent.focus = "timer";
        $rootScope.focus = 'timer';
=======
        Focus.change("timer");
>>>>>>> evancohen/master
        $scope.timer = TimerService;
        TimerService.start(duration);

        $scope.$watch('timer.countdown', function (countdown) {
            if (countdown === 0) {
                TimerService.stop();
                // defaultView();
            }
        });
    });

    // Show timer
    SpeechService.addCommand('timer_show', function () {
        if (TimerService.running) {
            // Update animation
            if (TimerService.paused) {
                TimerService.start();
                TimerService.stop();
            } else {
                TimerService.start();
            }

<<<<<<< HEAD
            //$scope.$parent.focus = "timer";
            $rootScope.focus = 'timer';
=======
            Focus.change("timer");
>>>>>>> evancohen/master
        }
    });

    // Stop timer
    SpeechService.addCommand('timer_stop', function () {
        if (TimerService.running && !TimerService.paused) {
            TimerService.stop();
        }
    });

    // Resume timer
    SpeechService.addCommand('timer_resume', function () {
        if (TimerService.running && TimerService.paused) {
            TimerService.start();
<<<<<<< HEAD
            //$scope.$parent.focus = "timer";
            $rootScope.focus = 'timer';
=======
            Focus.change("timer");
>>>>>>> evancohen/master
        }
    });

}


angular.module('Artemis')
    .controller('Timer', Timer);
