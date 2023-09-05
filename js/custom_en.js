var flag = false;

function load_page(){
    if (!flag){
        flag = true;
        var type = navigator.appName; //BOM对象获取浏览器名称
        if (type == "Netscape") {
            var lang = navigator.language.toLowerCase(); //获取浏览器配置语言，支持非IE浏览器
        } else {
            var lang = navigator.browserLanguage.toLowerCase(); //获取浏览器配置语言，支持IE5+
        };
        var lang = lang.substr(0, 5); //获取浏览器配置语言前4位
        if (lang == "zh") {
            // 根据获取的语言参数进行对应跳转
            window.location.replace('http://localhost:1313/cn');
        } 
    } else {
        exit;
    }
}

load_page()


