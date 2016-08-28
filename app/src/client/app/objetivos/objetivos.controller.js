(function() {
    'use strict';

    angular
        .module('app.objetivos')
        .controller('ObjetivosController', ObjetivosController);
        ObjetivosController.$inject = ['$q', 'dataservice', 'logger']; // o que inserir?

        function ObjetivosController() {
            var vm = this;
            vm.title = 'Objetivos';

            vm.objetivos = getObjectives();

            function getObjectives() {
                return [
                    {
                    'titulo': 'Casa',
                    'progresso': '25%',
                    'icone': ''
                    },
                    {
                    'titulo': 'Tattoo',
                    'progresso': '90%',
                    'icone': ''
                    },
                    {
                    'titulo': 'Viagem Japão',
                    'progresso': '0%',
                    'icone': ''
                    }
                ]
            }
        }
})();