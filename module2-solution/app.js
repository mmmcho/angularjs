(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyCtrl = this;
  buyCtrl.buyList = ShoppingListCheckOffService.getBuyList();

  buyCtrl.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;
    boughtCtrl.boughtList = ShoppingListCheckOffServce.getBoughtList();
}

function ShoppingListCheckOffService()  {
  var service = this;
  var buyItems = [{name: "cookies", quantity: 10},
    {name: "apples", quantity: 6},
    {name: "carrots", quantity: 8},
    {name: "eggs", quantity: 12},
    {name: "chicken wings", quantity: 10}
  ];
  var boughtItems = [];

  service.buyItem = function(index) {
    var item = buyItems[index];
    boughtItems.push(item);
    buyItems.splice(index, 1);
  };

  service.getBuyList = function() {
    return buyItems;
  };

  service.getBoughtList = function() {
    return boughtItems;
  };
}

})();
