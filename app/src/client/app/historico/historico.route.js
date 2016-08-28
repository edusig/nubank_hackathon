(function() {
  'use strict';

  angular
    .module('app.historico')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'historico',
        config: {
          url: '/historico',
          templateUrl: 'app/historico/historico.html',
          controller: 'HistoricoController',
          controllerAs: 'vm',
          title: 'historico',
          settings: {
            nav: 5,
            content: '<i class="fa fa-lock"></i> Histórico'
          }
        }
      }
    ];
  }
})();
