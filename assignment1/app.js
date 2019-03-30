(function () {
"use strict";
angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject =  ["$scope", "$filter"];

function LunchCheckController($scope, $filter){
  $scope.menu = "";
  $scope.checkDishes = function(){
    if($scope.menu == ""){
      $scope.checkMessage  =  "Please enter data first";
      $scope.checkMessageStyle = "";
    } else {
      var dishesCount = $scope.menu.split(",").length;
      if(dishesCount <= 3) {
        $scope.checkMessage  = "Enjoy!";
        $scope.checkMessageStyle = "green";
      } else {
        $scope.checkMessage  = "Too much!";
        $scope.checkMessageStyle = "red";
      }
    }
  };
}
})();
