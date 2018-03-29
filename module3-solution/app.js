(function() {
'use strict';

angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  ctrl.keyword = "";
  ctrl.found = [];
  ctrl.narrowItDown = function() {
    MenuSearchService.getMatchedMenuItems(ctrl.keyword)
    .then(function (response) {
      ctrl.found = response;
      console.log("controller: " + ctrl.found[0].description);
    });
  };

}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var foundItems = [];
    searchTerm = searchTerm.trim.toLowerCase();

    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function (result) {
        for (var i=0; i < result.data.menu_items.length; i++) {
          if (result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(result.data.menu_items[i]);
            console.log("push item");
          }
        }
        console.log(foundItems);
        return foundItems;
    }).catch(function (error) {
      console.log("Error while retrieving the data.");
    });
  };
}

})();
