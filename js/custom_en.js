var flag = false;

function load_page(){
    if (!flag){
        flag = true;
		    switch (navigator.language.toLowerCase()) {
				
				case "zh-tw":
					//alert("中文繁体(中国台湾)");
					break;
					
				case "zh-hk":
					//alert("中文繁体(中国香港)");
					break;
					
				case "zh-cn":
					//alert("中文简体");
					window.location.replace('https://micro-studios.com/cn/');
					break;
					
				case "zh":
					//alert("中文");
					window.location.replace('https://micro-studios.com/cn/');
					break;
					
				default:
					//alert('其它语言')
					break;
		}
}

load_page()


