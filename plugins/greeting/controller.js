function Greeting($rootScope, $scope, $http, $interval) {

    var greetingUpdater = function () {
        if (typeof config.greeting !== 'undefined' && !Array.isArray(config.greeting) && typeof config.greeting.midday !== 'undefined') {
            var hour = moment().hour();
            var greetingTime = "midday"; //11am - 3pm MIDDAY

            //5am - 11am MORNING
            if (hour >= 5 && hour < 11) {
              greetingTime = "morning";
              //3pm - 6pm AFTERNOON
            } else if (hour >= 15 && hour < 18) {
              greetingTime = "afternoon";
              //6pm - 10pm
            } else if (hour >= 18 && hour < 22) {
              greetingTime = "evening";
              //10pm - 5am
            } else if (hour >= 22 || hour < 5) {
              greetingTime = "night";
            }

            console.log(greetingTime);
            var nextIndex = Math.floor(Math.random() * config.greeting[greetingTime].length);
            var nextGreeting = config.greeting[greetingTime][nextIndex]
            $scope.greeting = nextGreeting;
        } else if (Array.isArray(config.greeting)) {
            $scope.greeting = config.greeting[Math.floor(Math.random() * config.greeting.length)];
        }
    };

    if (typeof config.greeting !== 'undefined') {
        greetingUpdater();
        $interval(greetingUpdater, config.greeting.refreshInterval * 6000 || 360000)
    }
}

angular.module('SmartMirror')
    .controller('Greeting', Greeting);
