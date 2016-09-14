'use strict';

angular.module('cath')
.controller('introSliderController', ['$rootScope', '$scope', 'myService', function ($rootScope, $scope, myService) {
  $scope.dataReady = false;
  // $scope.imageScale = 1/2;
  var imageScale = 1/3;
  $scope.calcWidth = $(window).width();
  $scope.calcHeight = $scope.calcWidth * imageScale;

  myService.fetchData('news').then(function (ret) {
    // TODO: mockData
    ret = [
      {
        image: '/assets/images/marketing/title.jpg',
        header: 'EQUAL . JUSTIC . UNDER . LAW',
        content: 'We have served clients of all range, from individuals to big organization. We provide personal solutions based on one\'s situation. Contact us for more information.',
      },
      // {
      //   image: '/assets/images/marketing/1-2.jpg',
      //   header: 'WE OFFER OUR CLIENTS ONLY',
      //   content: 'We have served clients of all range, from individuals to big organization. We provide personal solutions based on one\'s situation. Contact us for more information.',
      // },
      // {
      //   image: '/assets/images/marketing/1-1.jpg',
      //   header: 'EQUAL . JUSTIC . UNDER . LAW',
      //   content: 'We have served clients of all range, from individuals to big organization. We provide personal solutions based on one\'s situation. Contact us for more information.',
      // },
      // {
      //   image: '/assets/images/marketing/1-2.jpg',
      //   header: 'WE OFFER OUR CLIENTS ONLY',
      //   content: 'We have served clients of all range, from individuals to big organization. We provide personal solutions based on one\'s situation. Contact us for more information.',
      // },
    ];
    $scope.dataReady = true;
    $scope.list = ret;
    $scope.$applyAsync();

    _.defer(function () {
      $('#introCarousel').swiperight(function() {
        $(this).carousel('prev');
      });
      $("#introCarousel").swipeleft(function() {
        $(this).carousel('next');
      });
    });
  });
  $(window).resize(function () {
    $scope.calcWidth = $(window).width();
    $scope.calcHeight = $scope.calcWidth * imageScale;
    $scope.$applyAsync();
  });
}]);
