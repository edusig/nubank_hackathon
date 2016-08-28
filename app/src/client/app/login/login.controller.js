(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$q', 'dataservice', 'logger', 'authservice', '$state'];
    function LoginController($q, dataservice, logger, authservice, $state) {
        var loginCtrl = this;
        loginCtrl.doLogin = doLogin;
        loginCtrl.username = null;
        loginCtrl.password = null;

        function doLogin(){
            authservice.doLogin(loginCtrl.username, loginCtrl.password)
            .then(function(response){
                if ( response.result ) {
                    $state.go('objetivos');
                }
            });
        }
    }
})();