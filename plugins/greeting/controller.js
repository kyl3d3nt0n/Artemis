function Greeting($rootScope, $scope, $http, $interval) {

<<<<<<< HEAD
<<<<<<< HEAD
    var greetingUpdater = function () {
        if (config.greeting.option == 'time') {
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

            console.log("Current greeting time is: " + greetingTime);
            var nextIndex = Math.floor(Math.random() * config.greeting[greetingTime].length);
            var nextGreeting = config.greeting[greetingTime][nextIndex]
            $scope.greeting = nextGreeting;
        } else if (config.greeting.allDay) {
            $scope.greeting = config.greeting.allDay[Math.floor(Math.random() * config.greeting.allDay.length)];
        }
    };

    if (typeof config.greeting !== 'undefined') {
        greetingUpdater();
        //Update every 5 minutes
        $interval(greetingUpdater, config.greeting.refreshInterval * 5000 || 300000)
    }
=======
	var greetingUpdater = function () {
		if (config.greeting.option == 'time') {
			var hour = moment().hour();
			var greetingTime = "midday";

			if (hour > 4 && hour < 11) {
				greetingTime = "morning";
			} else if (hour > 18 && hour < 23) {
				greetingTime = "evening";
			} else if (hour >= 23 || hour < 4) {
				greetingTime = "night";
			}
			var nextIndex = Math.floor(Math.random() * config.greeting[greetingTime].length);
			var nextGreeting = config.greeting[greetingTime][nextIndex]
			$scope.greeting = nextGreeting;
		} else if (config.greeting.allDay) {
			$scope.greeting = config.greeting.allDay[Math.floor(Math.random() * config.greeting.allDay.length)];
		}
	};

=======
	var greetingUpdater = function () {
		if (config.greeting.option == 'time') {
			var hour = moment().hour();
			var greetingTime = "midday";

			if (hour > 4 && hour < 11) {
				greetingTime = "morning";
			} else if (hour > 18 && hour < 23) {
				greetingTime = "evening";
			} else if (hour >= 23 || hour < 4) {
				greetingTime = "night";
			}
			var nextIndex = Math.floor(Math.random() * config.greeting[greetingTime].length);
			var nextGreeting = config.greeting[greetingTime][nextIndex]
			$scope.greeting = nextGreeting;
		} else if (config.greeting.allDay) {
			$scope.greeting = config.greeting.allDay[Math.floor(Math.random() * config.greeting.allDay.length)];
		}
	};

>>>>>>> evancohen/master
	if (typeof config.greeting !== 'undefined') {
		greetingUpdater();
		$interval(greetingUpdater, config.calendar.refreshInterval * 60000 || 3600000)
	}
<<<<<<< HEAD
>>>>>>> evancohen/master
=======
>>>>>>> evancohen/master
}

angular.module('Artemis')
    .controller('Greeting', Greeting);
