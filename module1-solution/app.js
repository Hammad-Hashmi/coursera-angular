(function () {
'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', controllerFunction);
  controllerFunction.$inject = ['$scope'];

  function controllerFunction ($scope) {
    $scope.lunchItem = "";
    $scope.message = '';
    $scope.checkItem = function () {
      $scope.message = checkItems($scope.lunchItem);
    }
    function checkItems(asdf) {
      var abc = asdf.split(',');
      var count = 0;
      if (abc == null || abc == '') {
        return "nothing Selected";
      }
      abc.forEach(function (item)  {
        if (item != null && item != '') {
          count++;
        }
      });
      if (count <= 3) {
        return "Enjoy!";
      }
      else if (count > 3) {
        return "Too much!";
      }
    }
  };
})();
