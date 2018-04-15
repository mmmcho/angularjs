(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['info','ApiPath'];
function MyInfoController(info, ApiPath) {
  var myInfoCtrl = this;
  myInfoCtrl.info = info;
  myInfoCtrl.basePath = ApiPath;

}

})();
