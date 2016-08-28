(function () {
    'use strict';

    angular
        .module('app.extrato')
        .controller('ExtratoController', ExtratoController);

    ExtratoController.$inject = ['$q', 'dataservice', 'logger'];
    function ExtratoController($q, dataservice, logger) {
        var extratoCtrl = this;

        activate();

        function activate() {
            var promises = getExtrato();
            return $q.all(promises).then(function () {
                logger.info('Activated Extrato View');
            });
        }

        function getExtrato() {
            return dataservice.getExtrato().then(function (data) {
                extratoCtrl.extrato = data;
                console.log('Extrato: ', data);
                return extratoCtrl.extrato;
            });
        }
    }
})();