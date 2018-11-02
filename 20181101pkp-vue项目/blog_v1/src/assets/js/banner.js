$(function(){
 var i=0;
 function time(){
  var $img=$("#img-box img");
  var $li=$("#big-box>ul>li");
  i++;
  i=(i==5)?0:i;
  $img.eq(i).fadeIn().siblings().fadeOut();
  $li.eq(i).css("background","orange")
	  .siblings().css("background","white");
 }
   var stop=setInterval(time,2000);
  $("#big-box>ul>li").click(function(){
	  clearInterval(stop);
	  stop=null;
	if(stop!==null){var stop=setInterval(time,2000)}
   var n=$(this).index();
   $("#img-box img").eq(n).show().siblings().hide();
   $(this).eq(n).css("background","orange")
	  .siblings().css("background","white");
  })
})
