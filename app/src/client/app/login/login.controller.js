(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$q', 'dataservice', 'logger'];
    function LoginController($q, dataservice, logger) {
        var loginCtrl = this;

        activate();

        function activate() {}
    }
})();