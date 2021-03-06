(function() {
  'use strict';

  var core = angular.module('app.core');

  core.config(toastrConfig);

  toastrConfig.$inject = ['toastr'];
  /* @ngInject */
  function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
  }

  var config = {
    appErrorPrefix: '[Troco Error] ',
    appTitle: 'Troco'
  };

  core.value('config', config);

  core.config(configure);

  configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider', 'moment'];
  /* @ngInject */
  function configure($logProvider, routerHelperProvider, exceptionHandlerProvider, moment) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    moment.locale('pt-br');
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
  }

})();
