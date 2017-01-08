function Apps($rootScope, $scope, SpeechService) {

  //Open Applications
  SpeechService.addCommand('open_app', function(query) {
    $rootScope.focus = query;
    console.log("Scope is: " + $rootScope.focus);

    var non_active_app = angular.element(document.getElementsByClassName('app_icon'));
    non_active_app.removeClass('active_app');

    var active_app = angular.element(document.getElementsByClassName(query + '_app'));
    active_app.addClass('active_app');
  });

  //Close applications
  SpeechService.addCommand('close_app', function(query) {
    $rootScope.focus = 'default';
    console.log("Scope is: " + $rootScope.focus);
    //Adjust background color
    var non_active_app = angular.element(document.getElementsByClassName('app_icon'));
    non_active_app.removeClass('active_app');
  });

}
angular.module('SmartMirror')
    .controller('Apps', Apps);
