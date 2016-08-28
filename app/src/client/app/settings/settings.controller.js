(function () {
    'use strict';

    angular
        .module('app.extrato')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['$q', 'dataservice', 'logger'];
    function SettingsController($q, dataservice, logger) {
        var settingsCtrl = this;
        settingsCtrl.objetivos = ['Viagem', 'Alimentação', 'Lazer', 'Vestuário', 'Transporte'];
        settingsCtrl.esconder = true;
        settingsCtrl.esconde = function() {
            console.log(settingsCtrl.esconder);
            settingsCtrl.esconder = ! settingsCtrl.esconder;
            console.log(settingsCtrl.esconder);
        }
    }
})();