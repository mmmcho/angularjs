(function() {
'use strict';

angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    }
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.narrowItDown = function() {
    if (!ctrl.keyword) {
      ctrl.keyword = "";
    }
      MenuSearchService.getMatchedMenuItems(ctrl.keyword)
      .then(function (response) {
        ctrl.found = response;
      });
  };

  ctrl.removeItem = function(itemIndex) {
    ctrl.found.splice(itemIndex, 1);
  }

}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var foundItems = [];
    searchTerm = searchTerm.trim().toLowerCase();

    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function (result) {

        for (var i=0; i < result.data.menu_items.length; i++) {
          if (result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(result.data.menu_items[i]);
          }
        }
        return foundItems;
    }).catch(function (error) {
      console.log("Error while retrieving the data.");
    });
  };

}

})();
