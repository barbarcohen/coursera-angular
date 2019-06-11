(function(){
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController (SignupService){
  var ctrl = this;
  //place for default values if needed
  ctrl.item = SignupService.getMyInfo();
  ctrl.dataSaved = false;


  ctrl.submit = function(){
    //reset the message from last search
    ctrl.favoriteError = false;

    var promise = SignupService.signUp(ctrl.item);
    promise.then(() => {
        ctrl.dataSaved = true;
    },
    () => {
        ctrl.favoriteError = true;
    })

  };
}
})();
