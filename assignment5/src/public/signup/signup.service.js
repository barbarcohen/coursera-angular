(function(){
  "use strict";

  angular.module('public')
  .service('SignupService', SignupService);

  SignupService.$inject = ['$http', 'ApiPath']
  function SignupService($http, ApiPath){
    var SignupService = this;

    var signupData;

    SignupService.signUp = function(item){
      signupData = item;
      if(item.favorite){
        return $http.get(ApiPath + '/menu_items/'+item.favorite.toUpperCase()+'.json')
        .then(function (response) {
          signupData.favoriteData = response.data;
          return response.data;
        }, function(error){
          SignupService.clearFavorite();
        });
      } else {
        //favorite item was deleted
        SignupService.clearFavorite();
      }
    };
  
    SignupService.clearFavorite = function(){
      signupData.favoriteData = undefined;
    }
    SignupService.getMyInfo = function(){
        return signupData;
    };

  }
})();
