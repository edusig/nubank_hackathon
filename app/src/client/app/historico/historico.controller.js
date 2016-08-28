(function() {
    'use strict';

    angular
        .module('app.objetivos')
        .controller('HistoricoController', HistoricoController);
        HistoricoController.$inject = ['$q', 'dataservice', 'logger']; // o que inserir?

        function HistoricoController($q, dataservice, logger) {
            var vm = this;
            vm.title = 'Histórico';
        }
})();