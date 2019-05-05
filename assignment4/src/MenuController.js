(function(){
  'use strict';

  angular.module('MenuApp')
    .controller('MenuController', MenuController);

  MenuController.$inject = ['categories'];
  function MenuController(categories){
    var menuCtrl = this;
    menuCtrl.categories = categories;
  }

})();
