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
        state: 'ajustes',
        config: {
          url: '/ajustes',
          templateUrl: 'app/settings/settings.html',
          controller: 'SettingsController',
          controllerAs: 'settingsCtrl',
          title: 'Ajustes',
          settings: {
            nav: 4,
            content: '<i class="fa fa-lock"></i> Ajustes'
          }
        }
      }
    ];
  }
})();
