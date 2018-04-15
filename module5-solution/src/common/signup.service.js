(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);

function SignupService() {
  var service = this;
  service.item = {};

 service.saveSignup = function (signup) {
   service.item = signup;
  };

service.getSignup = function () {
  return service.item;
}

}



})();
