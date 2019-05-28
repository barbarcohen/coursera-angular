(function(){
  "use strict";

  angular.module("public")
    .component("myInfoComponent", {
      templateUrl: "src/public/myinfo/myinfo.component.html",
      bindings: {
        info: "<"
      },
      controller: MyInfoController
    });

  MyInfoController.$inject = ["SignupService"];
  function MyInfoController(SignupService){
      var $ctrl = this;

      $ctrl.myInfo = SignupService.getMyInfo();
  }
})();
