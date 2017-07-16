function NetworkMap($scope, $interval) {

  var console = require("my-console");
  var arpscan = require('arpscan-new');
  arpscan(function(err, data) {

      var info = data;
      var currentValue = 0;
      var i = 0;
      info.forEach(function(currentValue, i) {
        if(err) throw err;
        var mac_address = info[i].mac;
        var ip_address = info[i].ip;
        //console.log(i + ': ' + 'IP: ' + ip_address + ' | ' +'Mac: ' + mac_address);
        check(mac_address);
        console.log(mac_address);
        }); //end of forEach loop

        //MAC ADDRESSES
        //Kyle    6C:8D:C1:4O:B1:63
        //Trevor  D8:BB:2C:EC:B2:44
        //Dan     1C:91:48:EC:FF:31
        //Weeks   70:F0:87:62:88:77
        //Aimee   64:B0:A6:2A:39:CB
        //Scott
        //Rob     70:EC:E4:85:4D:75
        //Allie
        //Santosh
        //Caitlyn
        //Kyle
        function check(mac_address) {
        if(mac_address == '6C:8D:C1:40:B1:63') {
          name = "Kyle";
          //create_object(name);
          console.log("Kyle");
        }
        //Trevor
        if(mac_address == 'D8:BB:2C:EC:B2:44') {
          name = "Trevor";
          //create_object(name);
          console.log("Trevor");
        }
        //Dan
        if(mac_address == '1C:91:48:EC:FF:31') {
          name = "Dan";
          //create_object(name);
          console.log("Dan");
        }
        //Weeks
        if(mac_address == '70:F0:87:62:88:77') {
          name = "Weeks";
          //create_object(name);
          console.log("Weeks");
        }
        //Aimee
        if(mac_address == '64:B0:A6:2A:39:CB') {
          name = "Aimee";
          //create_object(name);
          console.log("Aimee");
        }
        //Scott
        if(mac_address === 'MAC') {
          name = "Scott";
          //create_object(name);
          console.log("Scott");
        }
        //Rob
        if(mac_address == '70:EC:E4:85:4D:75') {
          name = "Rob";
          //create_object(name);
          console.log("Rob");
        }
        //Allie
        if(mac_address === 'MAC') {
          name = "Allie";
          create_object(name);
        }
        //Santosh
        if(mac_address === 'MAC') {
          name = "Santosh";
          create_object(name);
        }
        //Caitlyn
        if(mac_address === 'MAC') {
          name = "Caitlyn";
          create_object(name);
        }
      }


        /*function create_object(name) {
          var people = new Object();
          people.name = name;
          people.IP_Address = info[i].ip;
          people.Mac_Address = info[i].mac;
          console.log(people);
      }*/
  });
}
angular.module('Artemis')
    .controller('NetworkMap', NetworkMap);
