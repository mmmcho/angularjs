(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    var service = this;

    service.getAllCategories = function () {
      return $http({
          url: "https://davids-restaurant.herokuapp.com/categories.json"
        })
        .then( function (result) {
          //console.log(result.data);
          return result.data;
        }
      );

    };

     service.getItemsForCategory = function (categoryShortName) {
         return $http({
           url: " https://davids-restaurant.herokuapp.com/menu_items.json",
           params: {
             category: categoryShortName
           }
         })
         .then( function (result) {
           //console.log(result.data.menu_items);
            return result.data.menu_items;
         });
     };

  }

})();
