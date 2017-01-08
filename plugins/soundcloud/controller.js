function Soundcloud($rootScope, $scope, $http, SoundCloudService, SpeechService) {

    //Initialize SoundCloud
    var playing = false, sound;
    SoundCloudService.init();

    //SoundCloud search and play
    SpeechService.addCommand('sc_play', function (query) {
        SoundCloudService.searchSoundCloud(query).then(function (response) {
            $rootScope.focus = 'sc';
            //Stop Youtube Video
            var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
            iframe.postMessage('{"event":"command","func":"' + 'stopVideo' +   '","args":""}', '*');
            
            console.log("Scope is " + $rootScope.focus);

            if (response[0].artwork_url) {
                $scope.scThumb = response[0].artwork_url.replace("-large.", "-t500x500.");
            } else {
                $scope.scThumb = 'http://i.imgur.com/8Jqd33w.jpg?1';
            }
            $scope.scWaveform = response[0].waveform_url;
            $scope.scTrack = response[0].title;
            //$scope.$parent.focus = "sc";
            SoundCloudService.play();
        });
    });

    //SoundCloud stop
    SpeechService.addCommand('sc_pause', function () {
        $rootScope.focus = 'default';
        SoundCloudService.pause();
        //$scope.$parent.focus = "default";
    });
    //SoundCloud resume
    SpeechService.addCommand('sc_resume', function () {
        $rootScope.focus = 'sc';
        SoundCloudService.play();
        //$scope.$parent.focus = "sc";
    });
    //SoundCloud replay
    SpeechService.addCommand('sc_replay', function () {
        $rootScope.focus = 'sc';
        SoundCloudService.replay();
        //$scope.$parent.focus = "sc";
    });
}

angular.module('Artemis')
    .controller('Soundcloud', Soundcloud);
