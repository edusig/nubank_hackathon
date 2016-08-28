(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('authservice', authservice);

  authservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function authservice($http, $q, exception, logger) {
    var service = {
        doLogin : doLogin,
        isLogged : isLogged,
    };

    return service;

    function doLogin(username, password) {
      return $http.post('/api/login', {
          data : {
              username : username,
              password : password,
          }
      })
        .then(success)
        .catch(fail);
    }

    function isLogged() {
        return $http.get('/api/logged')
        .then(success)
        .catch(fail);
    }

    function success(response) {
      return response.data;
    }

    function fail(e) {
      return exception.catcher('XHR Failed for getPeople')(e);
    }
  }
})();
