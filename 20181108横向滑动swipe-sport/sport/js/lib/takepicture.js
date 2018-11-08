//拍照
$(function(){
	$(".photo-cell").off("click").on("click",function(){
		$("input,textarea").blur();
		var liObj = $(this);
		takepictureEnd=function(r){
			if(r!=null&&r!=undefined&&r!="(null)"&&$.trim(r).length>0){
				liObj.find(".photograph").hide();
				liObj.find("img").show();
				liObj.find("img").attr("src","data:image/png;base64,"+r);
			    $("#"+liObj.data("formid")).val(r);
			}
		};
		callAppFunction("takepicture");
		return false;
	});
});

