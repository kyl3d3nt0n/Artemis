(function () {
	'use strict';

	function Focus($rootScope) {
		var service = {};
<<<<<<< HEAD
		var currentFocus = "default";
		console.log("Current Focus is: " + currentFocus);

		service.change = function(newFocus){
			$rootScope.$broadcast('focus', newFocus, currentFocus)
			currentFocus = newFocus
			console.log("Current Focus has changed to: " + currentFocus);
		}

		service.get = function(){
			return currentFocus;
		}

		return service
	}

	angular.module('Artemis')
=======
		var currentFocus = "default"
        
		service.change = function(newFocus){
			$rootScope.$broadcast('focus', newFocus, currentFocus)
			currentFocus = newFocus
		}

		service.get = function(){
			return currentFocus;
		}

		return service
	}

	angular.module('SmartMirror')
>>>>>>> evancohen/master
        .factory('Focus', Focus)

} (window.annyang));
