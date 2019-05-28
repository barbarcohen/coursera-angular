(function(){
  "use strict";

  angular.module('public')
  .service('SignupService', SignupService);

  function SignupService(){
    var SignupService = this;

    var signupData = undefined;
    SignupService.signUp = function(){

      //add to data
    };

    SignupService.getMyInfo = function(){
        return signupData;
    };
  }
})();
