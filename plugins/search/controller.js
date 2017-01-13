<<<<<<< HEAD
function Search($rootScope, $scope, $http, SpeechService) {
=======
function Search($scope, $http, SpeechService, $rootScope, Focus) {
>>>>>>> evancohen/master
    searchYouTube = function (query) {
        return $http({
            url: 'https://www.googleapis.com/youtube/v3/search',
            method: 'GET',
            params: {
                'part': 'snippet',
                'order': 'relevance',
                'q': query,
                'type': 'video',
                'videoEmbeddable': 'true',
                'videoSyndicated': 'true',
                //Sharing this key in the hopes that it wont be abused
                'key': config.youtube.key
            }
        });
    }

    function stopVideo() {
        var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
        iframe.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    }

    //Search for a video
    SpeechService.addCommand('video_search', function (query) {
        searchYouTube(query).then(function (results) {
            //Stop SoundCloud
            document.getElementById('player').pause();
            //Set cc_load_policy=1 to force captions
            $scope.video = 'https://www.youtube.com/embed/' + results.data.items[0].id.videoId + '?autoplay=1&controls=0&iv_load_policy=3&enablejsapi=1&showinfo=0';
<<<<<<< HEAD
            //$scope.$parent.focus = "video";
            $rootScope.focus = 'video';
            console.log('Scope is: ' + $rootScope.focus);
=======
            Focus.change("video");
>>>>>>> evancohen/master
        });
    });

    //Stop video
    SpeechService.addCommand('video_stop', function () {
<<<<<<< HEAD
        var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
        iframe.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        //$scope.$parent.focus = "default";
        $rootScope.focus = 'default';
=======
        Focus.change("default");
        stopVideo();
>>>>>>> evancohen/master
    });

    $rootScope.$on('focus', function (targetScope, newFocus, oldFocus) {
        if(oldFocus == "video" && newFocus != "video"){
            stopVideo();
        }
    })

}

angular.module('Artemis')
    .controller('Search', Search);
