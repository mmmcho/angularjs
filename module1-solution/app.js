(function () {
'user strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.message = "";
  $scope.checklunch = function () {
    if ($scope.menuitems === "") {
      $scope.message = "Please enter data first!";
    } else {
      var numOfItems =  splitStringToArray($scope.menuitems).length;
      if ( numOfItems > 3 ) {
        $scope.message = "Too much!";
      }
      else if ( numOfItems > 0 && numOfItems < 4) {
        $scope.message = "Enjoy!";
      }
    }
  };
}
  function splitStringToArray(menuItemsString) {
    return menuItemsString.split(",");
  }

})();
