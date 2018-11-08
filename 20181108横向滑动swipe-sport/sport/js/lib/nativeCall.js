
function callAppFunction(obj) {
	if (obj == null)return;
	var uri="plugin://" + JSON.stringify(obj);
	var  n = /Android/i.test(navigator.userAgent),
         r = /iphone|ipad/i.test(navigator.userAgent);
    if (n) {
        var o = document.createElement("IFRAME");        
        o.setAttribute("src", uri),
        document.documentElement.appendChild(o),
        o.parentNode.removeChild(o),
        o = null
    } else {
        if (!r) return new Promise(function(t, e) {
          e("noNative");
        });
        window.location.href = uri;
    }
}
/**
 * 获取版本号 
 * */
function getDevType(){
	var browser={
		    versions:function(){
		            var u = navigator.userAgent, app = navigator.appVersion;
		            return {         //移动终端浏览器版本信息
		                 trident: u.indexOf('Trident') > -1, //IE内核
		                presto: u.indexOf('Presto') > -1, //opera内核
		                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
		                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
		                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
		                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
		                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
		                iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
		                iPad: u.indexOf('iPad') > -1, //是否iPad
		                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
		            };
		         }(),
		         language:(navigator.browserLanguage || navigator.language).toLowerCase()
		};
	var t;
	if(browser.versions.ios==true){
		   t=0;
	}else if(browser.versions.android==true){
		   t=1;
	}
	return t;
};