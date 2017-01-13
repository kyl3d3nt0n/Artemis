<<<<<<< HEAD
function Giphy($rootScope, $scope, $http, SpeechService) {
=======
function Giphy($scope, $http, SpeechService, Focus) {
>>>>>>> evancohen/master

    //Show giphy image
    SpeechService.addCommand('image_giphy', function (img) {
        $http.get("http://api.giphy.com/v1/gifs/random?api_key=" + config.giphy.key + "&tag=" + img)
            .then(function (response) {
                $scope.gifimg = response.data.data.image_url;
<<<<<<< HEAD
                //$scope.$parent.focus = "gif";
                $rootScope.focus = 'gif';
=======
                Focus.change("gif");
>>>>>>> evancohen/master
            })
    });
}

angular.module('Artemis')
    .controller('Giphy', Giphy);
