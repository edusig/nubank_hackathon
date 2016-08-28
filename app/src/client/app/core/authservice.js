(function () {
  'use strict';

  angular
    .module('app.core')
    .service('authservice', authservice);

  authservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function authservice($http, $q, exception, logger) {
    var logged = false;
    var service = {
        doLogin : doLogin,
        doLogout : doLogout,
        isLogged : isLogged,
    };

    function doLogin(username, password) {
      return $http.post('/api/login', {
          username : username,
          password : password,
      })
        .then(success)
        .catch(fail);
    }

    function doLogout() {
      logged = false;
      return true;
    }

    function isLogged(){
      return logged;
    }

    function success(response) {
      logged = response.data.result;
      return response.data;
    }

    function fail(e) {
      return exception.catcher('XHR Failed for getPeople')(e);
    }
    return service;
  }
})();
