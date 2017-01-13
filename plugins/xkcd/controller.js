<<<<<<< HEAD
function Xkcd($rootScope, $scope, $http, SpeechService) {
=======
function Xkcd($scope, $http, SpeechService, Focus) {
>>>>>>> evancohen/master

    // Show xkcd comic
    SpeechService.addCommand('image_comic', function (state, action) {
        $http.jsonp("http://dynamic.xkcd.com/api-0/jsonp/comic?callback=JSON_CALLBACK")
            .then(function (response) {
                $scope.xkcd = response.data.img;
<<<<<<< HEAD
                //$scope.$parent.focus = "xkcd";
                $rootScope.focus = 'xkcd';
=======
                Focus.change("xkcd");
>>>>>>> evancohen/master
            });
    });

}

angular.module('Artemis')
    .controller('Xkcd', Xkcd);
