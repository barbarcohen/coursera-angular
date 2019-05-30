(function(){
  "use strict";

  angular.module('public')
  .service('SignupService', SignupService);

  SignupService.$inject = ['$http', 'ApiPath']
  function SignupService($http, ApiPath){
    var SignupService = this;

    var signupData = undefined;

    SignupService.signUp = function(item){
        var shortName = item.favorite;


        return $http.get(ApiPath + '/menu_items/'+shortName+'.json')
        .then(function (response) {
          signupData = item;
          return true;
        }, function(data){
          console.log(data);
          return false;
        });
    };

    SignupService.getMyInfo = function(){
        return signupData;
    };
    SignupService.searchForFavorite = function(shortName){
        return false;
    };
  }
})();
