(function () {
'use strict';
  angular.module('myFirstApp', [])
.controller('MyFirstController', function ($scope) {
  $scope.name = 'Hammad';
  $scope.value = 0;

$scope.calculateNumaric = function(){
  $scope.value = calculateNumaricfunction($scope.name);
};
function calculateNumaricfunction(name_) {
  var abc = 0;
  for (var i = 0; i < name_.length; i++) {
    abc += name_.charCodeAt(i);
  }
  return abc;
}

});

})();
