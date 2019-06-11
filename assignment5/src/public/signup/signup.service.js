(function(){
  "use strict";

  angular.module('public')
  .service('SignupService', SignupService);

  SignupService.$inject = ['$http', 'ApiPath']
  function SignupService($http, ApiPath){
    var SignupService = this;

    var signupData;

    SignupService.signUp = function(item){

      return new Promise((resolve, reject) => {
        signupData = item;
        if(item.favorite){
          $http.get(ApiPath + '/menu_items/'+item.favorite.toUpperCase()+'.json')
                .then(function (response) {
                    signupData.favoriteData = response.data;
                    resolve();
                 }, function(error){
                    SignupService.clearFavorite();
                    reject();
                  });
        } else {
          //favorite item was deleted
          SignupService.clearFavorite();
          resolve();
        }
      });

    };

    SignupService.clearFavorite = function(){
      signupData.favoriteData = undefined;
    }
    SignupService.getMyInfo = function(){
        return signupData;
    };

  }
})();
