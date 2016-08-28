(function () {
    'use strict';

    angular
        .module('app.extrato')
        .controller('ExtratoController', ExtratoController);

    ExtratoController.$inject = ['$q', 'dataservice', 'logger', '_'];
    function ExtratoController($q, dataservice, logger, _) {
        var extratoCtrl = this;
        extratoCtrl.getTotal = getTotal;

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
                return extratoCtrl.extrato;
            });
        }

        function getTotal() {
            return _.reduce(extratoCtrl.extrato, function (sum, n) {
                return sum + n.vl_troco;
            }, 0).toFixed(2);
        }
    }
})();