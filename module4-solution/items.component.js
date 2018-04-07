(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'templates/items.template.html',
  bindings: {
    lists: '<',
    name: '<'
  }
});

})();
