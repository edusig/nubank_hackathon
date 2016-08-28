(function() {
  'use strict';

  angular
    .module('app.extrato')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'extrato',
        config: {
          url: '/extrato',
          templateUrl: 'app/extrato/extrato.html',
          controller: 'ExtratoController',
          controllerAs: 'extratoCtrl',
          title: 'Extrato',
          settings: {
            nav: 3,
            content: '<i class="fa fa-lock"></i> Extrato'
          }
        }
      }
    ];
  }
})();
