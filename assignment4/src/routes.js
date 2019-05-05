(function(){
  'use strict';
  angular.module('MenuApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
  function RoutesConfig($stateProvider, $urlRouterProvider){

    var states = [
        {
          name: 'home',
          url: '/',
          templateUrl: 'src/home.template.html'
        },
        {
          name: 'categories',
          url: '/categories',
          templateUrl: 'src/menu/menu.template.html',
          controller: 'MenuController as menuCtrl',
          resolve: {
            categories: ['MenuAppService', function(MenuAppService) {
              return MenuAppService.getAllCategories();
            }]
          }
        },
        {
          name: 'categories.items',
          url: '/{id}/items',
          templateUrl: 'src/items/items.template.html',
          controller: 'ItemsController as itemsCtrl',
          params: {
            id: null
          },
          resolve: {
            items: ['$stateParams','MenuAppService',function($stateParams, MenuAppService){
              return MenuAppService.getItemsForCategory($stateParams.id);
            }]
          }
        }
      ];
      states.forEach((state) => $stateProvider.state(state));
      $urlRouterProvider.otherwise('/');
  }
})();
