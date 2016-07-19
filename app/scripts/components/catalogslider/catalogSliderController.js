'use strict';

angular.module('angular-seed')
.controller('catalogSliderController', ['$rootScope', '$scope', function ($rootScope, $scope) {
  $scope.callData = function (cat) {
    var deferred = new $.Deferred();
    var mockData = {
      news: [
        {
          classId: '',
          headlineText: 'HEADLINE 1',
          date: '',
          img: '',
          briefText: '',
        },
        {
          classId: '',
          headlineText: 'HEADLINE 2',
          date: '',
          img: '',
          briefText: '',
        },
        {
          classId: '',
          headlineText: 'HEADLINE 3',
          date: '',
          img: '',
          briefText: '',
        },
        {
          classId: '',
          headlineText: 'HEADLINE 4',
          date: '',
          img: '',
          briefText: '',
        },
        {
          classId: '',
          headlineText: 'HEADLINE 5',
          date: '',
          img: '',
          briefText: '',
        },
      ],
      investigations: [
        {
          classId: '',
          headlineText: 'investigations 1',
          date: '',
          img: '',
          briefText: '',
        },
        {
          classId: '',
          headlineText: 'investigations 2',
          date: '',
          img: '',
          briefText: '',
        },
      ],
      settlements: [],
    }
    _.delay(function () {
      $scope.dataReady = true;
      deferred.resolve(_.get(mockData, cat));
      $scope.$applyAsync();
    }, 500);
    return deferred.promise();
  };
  $scope.dataReady = false;
  $scope.callData($scope.catalog).then(function (ret) {
    $scope.list = ret;
  }); // try simulate timing like real service call
}]);
