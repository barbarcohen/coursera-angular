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
    SignupService.signUp(ctrl.item);
    ctrl.dataSaved = true;
  };
}
})();
