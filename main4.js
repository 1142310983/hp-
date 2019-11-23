require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "login":"login"
    },
    shim: {
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"],
    }
})

require(["login"], function(login){
    login.navigation();
    login.headerNav();
    login.Form_Authentication();
    login.data_interaction();
})