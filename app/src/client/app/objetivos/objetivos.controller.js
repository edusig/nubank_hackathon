(function() {
    'use strict';

    angular
        .module('app.objetivos')
        .controller('ObjetivosController', ObjetivosController);
        ObjetivosController.$inject = ['$q', 'dataservice', 'logger', 'moment']; // o que inserir?

        function ObjetivosController($q, dataservice, logger, moment) {
            var vm = this;
            vm.title = 'Objetivos';
            vm.objetivos = [];
            vm.addObjective = addObjective;

            activate();

            function activate() {
            var promises = [getObjectives()];
                return $q.all(promises).then(function() {
                });
            }

            function getObjectives() {
                return dataservice.getObjectives().then(function(data) {
                    vm.objetivos = [];
                    var temp;
                    for(var o in data ) {
                        temp = data[o];
                        temp.fromNow = moment(temp.target_date, 'YYYYMM').fromNow();
                        vm.objetivos.push(temp);
                    }
                    console.log(vm.objetivos);
                    return vm.objetivos;
                });
            }

            function addObjective(name, price, date){
                var mdate = moment(date, 'MM/YYYY');
                var target_date = mdate.format('YYYYMM');
                var validDate = !isNaN(parseFloat(target_date));
                if ( validDate ) {
                    vm.objetivos.push({
                        id: vm.objetivos.length,
                        name : name,
                        target_vl : parseFloat(price),
                        current_vl : 0.0,
                        target_date : target_date,
                        fromNow : mdate.fromNow(),
                    });
                } else {
                    logger.error('Coloque uma data valida (MM/AAAA) para cadastrar um novo objetivo');
                }
            }

        }
})();