(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['lists', '$stateParams'];
function ItemsController(lists, $stateParams) {
  var items = this;
  items.lists = lists;
  items.categoryName = $stateParams.categoryName;

}

})();
