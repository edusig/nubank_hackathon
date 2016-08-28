(function() {
  'use strict';

  angular
    .module('app.cadastro-cartao')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'cadastro-cartao',
        config: {
          url: '/cadastro-cartao',
          templateUrl: 'app/cadastro-cartao/cadastro-cartao.html',
          controller: 'CadastroCartaoController',
          controllerAs: 'ccCtrl',
          title: 'Cadastro Cartão',
          settings: {
            nav: 4,
            content: '<i class="fa fa-cadastro-cartao"></i> Cadastro Cartão'
          }
        }
      }
    ];
  }
})();
