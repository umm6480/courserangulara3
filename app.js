(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('BoughtController', BoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.addBoughtItem(toBuyList.items[itemIndex]);
    ShoppingListCheckOffService.removeToBuyItem(itemIndex);
  }
}


BoughtController.$inject = ['ShoppingListCheckOffService'];
function BoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;
  var boughtItems = [];
  var toBuyItems = [{"name": "uno", "quantity": 1},
                    {"name": "dos", "quantity": 2},
                    {"name": "tres", "quantity": 3},
                    {"name": "cuatro", "quantity": 4},
                    {"name": "cinco", "quantity": 5}];

  service.addBoughtItem = function (item) {
    boughtItems.push(item);
  };

  service.removeToBuyItem = function (itemIndex) {
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  }
}

})();
