(function() {
    'use strict';

    angular
        .module('app.objetivos')
        .controller('ObjetivosController', ObjetivosController);
        ObjetivosController.$inject = ['$q', 'dataservice', 'logger']; // o que inserir?

        function ObjetivosController($q, dataservice, logger) {
            var vm = this;
            vm.title = 'Objetivos';
            vm.objetivos = [];

            activate();

            function activate() {
            var promises = [getObjectives()];
                return $q.all(promises).then(function() {
                    logger.info('Activated Objetivos View');
                });
            }

            function getObjectives() {
                return dataservice.getObjectives().then(function(data) {
                    vm.objetivos = data;
                    return vm.objetivos;
                });
            }

        }
})();