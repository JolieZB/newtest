$(function(){
	//隐藏键盘
	//var isMove=false;
	$(document).on("touchstart",function(event){
		//isMove=false;
		if(event.target.tagName.indexOf("INPUT")>-1
				||event.target.tagName.indexOf("TEXTAREA")>-1
				||event.target.className.indexOf("txdzclose")>-1)
			return;
		else{
			$("input,textarea").blur();
		}
	});
	
	
	$(document).on("keyup",  "input,textarea",function(event){
		var inputobj    = $(this);
	    var inputobjVal = inputobj.val();
		 /* inputobj.val(inputobjVal.replace(/ /g,""));*/
		var clearBtnObj = $("#"+inputobj.attr("data-clearbtnid"));
		if(clearBtnObj!=undefined&&clearBtnObj!=null){
			if(jutils.isNull(inputobjVal)){
				clearBtnObj.hide();
			}else{
				clearBtnObj.show();
			}
		}
	});
	//输入框中的删除按钮
	$(document).off("tap",".muizhxf-icon-clear").on("tap",".muizhxf-icon-clear",function(){
		var inputid=$(this).attr("data-inputid");
		if(inputid!=undefined&&inputid!=null){
			//$("#"+inputid).focus();
			$("#"+inputid).val("");//.focus();
			$(this).hide();
		}
	});
	
});
;(function(wd){
	if(wd.jutils!=undefined){
		return;
	}
	var jutils=wd.jutils={};

	jutils.getNotNullValue = function(str){
		return this.isNull(str)?"":str+"";
	};
	jutils.isNull = function(){
		if(arguments.length==0){
			return true;
		}
		var bNull=false;
		for(var i =0;i<arguments.length;i++){
			var o=arguments[i];
			if(o==null || typeof(o)=="undefined"){
				bNull=true;
				break;
			}else if(typeof(o)=="string"){
				if(o.replace(/\s/g,"")==""||o.indexOf("undefined")>-1||o.indexOf("null")>-1){
					bNull=true;
					break;
				}
			}
		}
		return bNull;
	};
	jutils.isNotNull = function(str){
		return !this.isNull(str)
	};
	jutils.getFormValue = function(selectid){
		var v=$("#"+selectid).val();
		return this.isNull(v)?"":v;
	};
	jutils.setFormValue = function(selectid,v){
		$("#"+selectid).val(v);
	};
	jutils.getIntValue = function(str){
		if(this.isNull(str)){
			return 0;
		}
		var i = Number(str);
		if(isNaN(i)){
			return 0;
		}
		return Math.floor(i);
	};
	//证件号打星
	jutils.hideID = function(id){
		if(id.length>10)
			id=id.substring(0,6)+"********"+id.substring(id.length-4);
		return id;
	};
	//手机号码格式化
	jutils.toSplitPhone = function(p){
		var i = p.length;
		if (i > 7) {
			p = p.substring(0, 3) + "-" + p.substring(3, 7) + "-"
					+ p.substring(7, i);
		} else if (i > 3) {
			p = p.substring(0, 3) + "-" + p.substring(3, i);
		}
		return p;
	};
	//datestr:格式yyyymmddhhmiss
	jutils.formatDate = function(datestr){
		var y=datestr.substring(0,4);
		var m=datestr.substring(4,6);
		var d=datestr.substring(6,8);
		var hh=datestr.substring(8,10);
		var mi=datestr.substring(10,12);
		var ss=datestr.substring(12,14);
		return y+"-"+m+"-"+d+" "+hh+":"+mi+":"+ss;
	};
	//中文位数
	jutils.countChiness = function(str){
		var n=0;
		if(this.isNull(str)){
			return n;
		}
		for(var i=0;i<str.length;i++){
			if(this.checkRegExp(str.charAt(i), "chiness")){
				n++;
			}
		}
		return n;
	};
	//删除数组重复
	jutils.uniqeArray= function(arr){
		var newArr = [arr[0]]; //结果数组
		  for(var i = 1; i < arr.length; i++) {
		    if (arr.indexOf(arr[i]) == i) newArr.push(arr[i]);
		  }
		  return newArr;
	};
	var iRegExp={
		unicomtel : /^(13[012]\d{8})$|(18[56]\d{8})$|(15[56]\d{8})$|(17[56]\d{8})$|(145\d{8})$|(16[2567]\d{8})$|(19[123589]\d{8})$|(14[01234]\d{10})$/,
		chiness : /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/, //含中文
		iccid : /^898601[0-9]{13}[A-Z0-9]?$/,
		linetel : /^(\d{3,4}|\d{3,4}-)?\d{7,8}$/,
		email: /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/,
		digital: /^[0-9]*$/,
		digitalAndAlpha: /^[0-9A-Za-z]*$/,
		certid: /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X|x)?$/,
        telphone:/^[1][3,4,5,7,8][0-9]{9}$/         //手机号码校验
	};
	jutils.checkRegExp = function(str,key){
		return iRegExp[key].test(str);
	};
	
	jutils.checkPassWord=function(str){
		 var rC = {
			        lW:'[a-z]',
			        uW:'[A-Z]',
			        nW:'[0-9]',
			        sW:'[\\u0020-\\u002F\\u003A-\\u0040\\u005B-\\u0060\\u007B-\\u007E]'
		};
	    function Reg(str, rStr){
	        var reg = new RegExp(rStr);
	        if(reg.test(str)) return true;
	        else return false;
	    }
	    if(str.length < 6||str.length>20){
	        //  document.title = '密码长度为6到20之间';
	        return false;
	    }
	    return true;
	   /* else{
	        var tR = {
	            l:Reg(str, rC.lW),
	            u:Reg(str, rC.uW),
	            n:Reg(str, rC.nW),
	            s:Reg(str, rC.sW)
	        };
	        if((tR.l && tR.u && tR.n) || (tR.l && tR.u && tR.s) || (tR.s && tR.u && tR.n) || (tR.s && tR.l && tR.n)){
	            return true;
	        }else{
	            return false;
	        }
	    }*/
	 };
	 jutils.changefenhao=function(str){
	    var re     = new RegExp("“","g");
	    var newstr = str.replace(re,"\"");
	    return newstr 
	 };
	 //含有遮罩的提示
	 jutils.sloading=function(loadtext){
		    if(loadtext==undefined){ loadtext = "正在加载，请稍候...";}
		 	if ($("#loading-box-div").length > 0) {
		 		$("#loading-box-div").css("display", "block");
		 		$(".loading-text").html(loadtext);
		 	} else {
	           var loadbox ='<div id="loading-box-div">'+
		        	             '<div id="loading-box">'+
		        	                      '<span class="mui-spinner"></span>'+
		                                  '<div class="loading-text">'
		                                    + loadtext + 
		                                 ' </div>'+
		                         '</div>'+
		                         '<div class="mui-popup-backdrop mui-active"></div>'+
		                     '<div>'     
	           $("body").append(loadbox);
		 	}
	 };
	 jutils.cloading=function(){
		 $("#loading-box-div").css("display", "none");
	 };
	
	 //不含有遮罩层的提示
	 jutils.sloading2=function(loadtext){
		    if(loadtext==undefined){ loadtext = "正在加载...";}
		 	if ($("#loading-box").length > 0) {
		 		$("#loading-box").css("display", "block");
		 		$(".loading-text").html(loadtext);
		 	} else {
	           var loadbox ='<div id="loading-box">'+
		        	             '<div>'+
		        	                      '<span class="mui-spinner"></span>'+
		                                  '<div class="loading-text">'
		                                    + loadtext + 
		                                 ' </div>'+
		                         '</div>'+
		                         '<div class="mui-popup-backdrop mui-active"></div>'+
		                     '<div>'     
	           $("body").append(loadbox);
		 	}
	 };
	 jutils.cloading2=function(){
		 $("#loading-box").remove();
	 };
	 
	 //tab 的切换
	 jutils.tabIndexshow=function(index){
		    var href=''; 
			switch (index){
			case 1:
			  href="/homeController/home.shtml"
			  break;
			case 2:
			  href="/equipController/equipIndex.shtml"
			  break;
			case 3:
			  href="/mineController/mine.shtml";
			  break;
			}
		    jutils.sloading("加载中...");
		    location.href=ctp+href;
	 }
})(window);