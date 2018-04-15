(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignupService', 'MenuService'];
function SignUpController(SignupService, MenuService) {
  var signup = this;

    signup.item = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      shortname: "",
      name: "",
      description: ""
    };

    signup.completed = false;
    signup.shortnameerror = false;

    signup.go = function () {
      signup.item.shortname = signup.item.shortname.toUpperCase();
      var promise = MenuService.getMenuItem(signup.item.shortname);
      promise.then( function (response) {
          signup.item.name = response.name;
          signup.item.description = response.description;
            SignupService.saveSignup(signup.item);
            signup.shortnameerror = false;
            signup.completed = true;
        })
      .catch(function (response) {
        signup.completed = false;
        signup.shortnameerror = true;
      });
    };
}

})();
