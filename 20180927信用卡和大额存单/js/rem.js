// rem布局
!function(e,t){function i(){var t=n.getBoundingClientRect().width;t/m>540&&(t=540*m);var i=t/10;n.style.fontSize=i+"px",d.rem=e.rem=i}var a,r=e.document,n=r.documentElement,o=r.querySelector('meta[name="viewport"]'),l=r.querySelector('meta[name="flexible"]'),m=0,s=0,d=t.flexible||(t.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var p=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);p&&(s=parseFloat(p[1]),m=parseInt(1/s))}else if(l){var c=l.getAttribute("content");if(c){var u=c.match(/initial\-dpr=([\d\.]+)/),f=c.match(/maximum\-dpr=([\d\.]+)/);u&&(m=parseFloat(u[1]),s=parseFloat((1/m).toFixed(2))),f&&(m=parseFloat(f[1]),s=parseFloat((1/m).toFixed(2)))}}if(!m&&!s){var v=(e.navigator.appVersion.match(/android/gi),e.navigator.appVersion.match(/iphone/gi)),h=e.devicePixelRatio;m=v?h>=3&&(!m||m>=3)?3:h>=2&&(!m||m>=2)?2:1:1,s=1/m}if(n.setAttribute("data-dpr",m),!o)if(o=r.createElement("meta"),o.setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+s+", maximum-scale="+s+", minimum-scale="+s+", user-scalable=no"),n.firstElementChild)n.firstElementChild.appendChild(o);else{var x=r.createElement("div");x.appendChild(o),r.write(x.innerHTML)}e.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(i,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(a),a=setTimeout(i,300))},!1),"complete"===r.readyState?r.body.style.fontSize=12*m+"px":r.addEventListener("DOMContentLoaded",function(e){r.body.style.fontSize=12*m+"px"},!1),i(),d.dpr=e.dpr=m,d.refreshRem=i,d.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},d.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}));

// 加载弹窗
var uLoading = function () {
  function g(element){
    return document.querySelector(element);
  }
  function show(){
    if(g("#uLoading")){
      g("#uLoading").style.display = 'block';
    }else{
      g("body").appendChild(loadingHtml());
    }
    g("body").style.overflow = 'hidden';
  }
  function hide(){
    if(g("#uLoading")){
      g("#uLoading").style.display = 'none';
    }
    g("body").style.overflow = 'auto';
  }
  function loadingHtml(){
    var loadBox = document.createElement("div");
    loadBox.id = "uLoading";
    loadBox.className = "u-loading";
    var loadingHtml = '';
    // loadingHtml += '<div id="uLoading" class="u-loading">';
    loadingHtml += '  <div class="u-loading__box">';
    loadingHtml += '    <span class="mui-spinner mui-spinner-white"></span>';
    loadingHtml += '    <p>加载中</p>';
    loadingHtml += '  </div>';
    // loadingHtml += '</div>';
    loadBox.innerHTML = loadingHtml;
    return loadBox;
  }
  return {
    show: show,
    hide: hide
  }
}();