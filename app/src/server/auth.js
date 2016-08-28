var auth = {
    logged : false,
    doLogin : doLogin,
    doLogout: doLogout,
};

function doLogin(username, password){
    if (username === 'heloa' && password === 'teste123') {
        auth.logged = true;
        return true;
    }
    auth.logged = false;
    return false;
}
function doLogout(){
    auth.logged = false;
    return true;
}
module.exports = auth; 