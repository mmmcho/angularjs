(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['lists'];
function CategoriesController(lists) {
  var categories = this;
  categories.lists = lists;

}

})();
