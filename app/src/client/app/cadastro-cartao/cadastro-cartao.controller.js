(function() {
'use strict';

    angular
        .module('app.cadastro-cartao')
        .controller('CadastroCartaoController', CadastroCartaoController);

    CadastroCartaoController.$inject = [];
    function CadastroCartaoController() {
        var ccCtrl = this;
        ccCtrl.card = {};

        activate();

        ////////////////

        function activate() { }
    }
})();