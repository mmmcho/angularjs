(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
   .state('home', {
     url: '/',
     templateUrl: 'templates/home.template.html'
   })

  // Categories page
  .state('categories', {
    url: '/categories',
//    templateUrl: 'templates/menu-categories.template.html',
  //  controller: 'CategoriesController as categories',
    component: 'categories',
    resolve: {
      lists: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Items page
  .state('items', {
    url: '/items/{categoryShortName}/{categoryName}',
  //  templateUrl: 'templates/menu-items.template.html',
  //  templateUrl: 'templates/categories.template.html',
  //  controller: 'ItemsController as items',
    component: 'items',
    resolve: {
      lists: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }],
      name: ['$stateParams', function ($stateParams) {
                return $stateParams.categoryName;
      }]

    }
  });
}

})();
