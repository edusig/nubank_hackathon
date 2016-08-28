(function () {
    'use strict';

    angular
        .module('app.extrato')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['$q', 'dataservice', 'logger'];
    function SettingsController($q, dataservice, logger) {
        var settingsCtrl = this;

    }
})();