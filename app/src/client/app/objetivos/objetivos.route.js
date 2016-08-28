(function() {
  'use strict';

  angular
    .module('app.objetivos')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'objetivos',
        config: {
          url: '/objetivos',
          templateUrl: 'app/objetivos/objetivos.html',
          controller: 'ObjetivosController',
          controllerAs: 'vm',
          title: 'objetivos',
          settings: {
            nav: 4,
            content: '<i class="fa fa-lock"></i> Objetivos'
          }
        }
      }
    ];
  }
})();
