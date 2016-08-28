module.exports = function(){
    var auth = {
        doLogin : doLogin,
        logged : isLogged(),
        doLogout: doLogout,
    };
    var logged = false;
    function doLogin(username, password){
        if (username === 'heloa' && password === 'teste123') {
            logged = true;
            return true;
        }
        logged = false;
        return false;
    }
    function doLogout(){
        logged = false;
        return true;
    }
    function isLogged() {
        return logged;
    }
    return auth;
};