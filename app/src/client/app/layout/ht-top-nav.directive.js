(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('htTopNav', htTopNav);

  /* @ngInject */
  function htTopNav() {
    var directive = {
      bindToController: true,
      controller: TopNavController,
      controllerAs: 'vm',
      restrict: 'EA',
      scope: {
        'navline': '='
      },
      templateUrl: 'app/layout/ht-top-nav.html'
    };

    TopNavController.$inject = ['$scope', 'routerHelper', '$state'];

    /* @ngInject */
    function TopNavController($scope, routerHelper, $state) {
      var vm = this;
      $scope.isCollapsed = true;
      var states = routerHelper.getStates();
      vm.isCurrent = isCurrent;
      $scope.isCurrent = isCurrent;

      activate();

      function activate() { getNavRoutes(); }

      function getNavRoutes() {
        vm.navRoutes = states.filter(function(r) {
          return r.settings && r.settings.nav;
        }).sort(function(r1, r2) {
          return r1.settings.nav - r2.settings.nav;
        });
      }

      function isCurrent(route) {
        if (!route.title || !$state.current || !$state.current.title) {
          return '';
        }
        var menuName = route.title;
        return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
      }
    }

    return directive;
  }
})();