$(function(){
var $header=$("#head");
 $.ajax({
  type:"get",
  url:"header.html",
  success:function(header){
    $header.html(header);
  }
 })
 var $footer=$("#ft");
 $.ajax({
  type:"get",
  url:"footer.html",
  success:function(footer){
    $footer.html(footer);
  }
})
   //  上方轮播图
    $.ajax({
	   type:"get",
	   url:"data/images.php",
       dataType:"json",
       success:function(da){
          var res=da.data;
          var html="";
		  html+=`<div class="col-sm-4 col-xs-12">
	    <img src="${res[0].image}" class="img-responsive">
	  </div>
      <div class="col-sm-4 col-xs-12">
	    <div class="carousel slide" data-ride="carousel" data-interval="2000"  data-pause="null" id="sho">
          <div class="carousel-inner">
	       <div class="item active"><img src="${res[1].image}"class="img-responsive"></div>
		   <div class="item"><img src="${res[2].image}" class="img-responsive"></div>
		   <div class="item"><img src="${res[3].image}" class="img-responsive"></div>
          </div>
		  <ul class="carousel-indicators">
              <li data-slide-to="0" data-target="#sho" class="active"></li>
              <li data-slide-to="1" data-target="#sho"></li>
              <li data-slide-to="2" data-target="#sho"></li>
          </ul>
        </div>
	  </div>
      <div class="col-sm-4 col-xs-12">
	    <img src="${res[4].image}" class="img-responsive">
	  </div>`;
	    $("#ro").html(html);
	  }
	})
 //个人博客模板
   $.ajax({
      type:"get",
      url:"data/b_image.php",
      dataType:"json",
 	  success:function(data){
      var res=data.data;
		  var html="";
			html+=` <li class="col-sm-4 col-xs-6 col-md-4">
				  <div><img src="${res[0].imagepath}" class="img-responsive" 
				style="border-radius:5px"></div>
				  <b>${res[0].title}</b>
				  <span>${res[0].text}</span><br>
				  <a href="#">+下载模板</a>
				</li>		  
				<li class="col-sm-4 col-xs-6 col-md-4">
				  <div><img src="${res[1].imagepath}"></div>
				  <b>${res[1].title}</b>
				  <span>${res[1].text}</span><br>
				  <a href="">+下载模板</a>
				</li>
				<li class="col-sm-4 col-xs-6 col-md-4">
				  <div><img src="${res[2].imagepath}"></div>
				  <b>${res[2].title}</b>
				  <span>${res[2].text}</span><br>
				  <a href="">+下载模板</a>
				</li>
				<li class="col-sm-4 col-xs-6 col-md-4">
				  <div><img src="${res[3].imagepath}"></div>
				  <b>${res[3].title}</b>
				  <span>${res[3].text}</span><br>
				  <a href="">+下载模板</a>
				</li>
				<li class="col-sm-4 col-xs-6 col-md-4">
				  <div><img src="${res[4].imagepath}"></div>
				  <b>${res[4].title}</b>
				  <span>${res[4].text}</span><br>
				  <a href="">+下载模板</a>
				</li>
				<li class="col-sm-4 col-xs-6 col-md-4">
				   <div><img src="${res[5].imagepath}"></div>
				   <b>${res[5].title}</b>
				   <span>${res[5].text}</span><br>
			     <a href="">+下载模板</a>
				</li>`;
		$("#ii").html(html);
 	 }
    })
//右侧栏
	$.ajax({
	  type:"get",
	  url:"data/r-article.php",
	  dataType:"json",
	  success:function(data){
	     var rr=data.data;
		 var html="";
		 var hh="";
		 html+=`<h2 class="col-sm-12 col-sm-offset-3">点击排行</h2>
					<a class="col-sm-12">${rr[0].title}</a>
				    <a href="#" class="col-sm-6 sp">
				    	<img src="${rr[0].pic}" class="img-responsive">
				    </a>	
					<p class="col-sm-6">${rr[0].text}</p>

					<a class="col-sm-12">${rr[1].title}</a>
				    <a href="#" class="col-sm-6 sp">
				    	<img src="${rr[1].pic}" class="img-responsive">
				    </a>	
					<p class="col-sm-6">${rr[1].text}</p>

                    <a class="col-sm-12">${rr[2].title}</a>
				    <a href="#" class="col-sm-6 sp">
				    	<img src="${rr[2].pic}" class="img-responsive">
				    </a>	
					<p class="col-sm-6">${rr[2].text}</p>

                    <a class="col-sm-12">${rr[3].title}</a>
				    <a href="#" class="col-sm-6 sp">
				    	<img src="${rr[3].pic}" class="img-responsive">
				    </a>	
					<p class="col-sm-6">${rr[3].text}</p>
 
                    <a class="col-sm-12">${rr[4].title}</a>
				    <a href="#" class="col-sm-6 sp">
				    	<img src="${rr[4].pic}" class="img-responsive">
				    </a>	
					<p class="col-sm-6">${rr[4].text}</p>  

                    <a class="col-sm-12">${rr[5].title}</a>
				    <a href="#" class="col-sm-6 sp">
				    	<img src="${rr[5].pic}" class="img-responsive">
				    </a>	
					<p class="col-sm-6">${rr[5].text}</p>
				</li>`;
				$("#right-top").html(html);
	     hh+=`<h2 class="col-sm-12 col-sm-offset-3">站长推荐</h2>
					<a class="col-sm-12">${rr[6].title}</a>
				    <a href="#" class="col-sm-6 sp">
				    	<img src="${rr[6].pic}" class="img-responsive">
				    </a>	
					<p class="col-sm-6">${rr[6].text}</p>

					<a class="col-sm-12">${rr[7].title}</a>
				    <a href="#" class="col-sm-6 sp">
				    	<img src="${rr[7].pic}" class="img-responsive">
				    </a>	
					<p class="col-sm-6">${rr[7].text}</p>

                    <a class="col-sm-12">${rr[8].title}</a>
				    <a href="#" class="col-sm-6 sp">
				    	<img src="${rr[8].pic}" class="img-responsive">
				    </a>	
					<p class="col-sm-6">${rr[8].text}</p>

                    <a class="col-sm-12">${rr[9].title}</a>
				    <a href="#" class="col-sm-6 sp">
				    	<img src="${rr[9].pic}" class="img-responsive">
				    </a>	
					<p class="col-sm-6">${rr[9].text}</p>
 
                    <a class="col-sm-12">${rr[10].title}</a>
				    <a href="#" class="col-sm-6 sp">
				    	<img src="${rr[10].pic}" class="img-responsive">
				    </a>	
					<p class="col-sm-6">${rr[10].text}</p>  

                    <a class="col-sm-12">${rr[11].title}</a>
				    <a href="#" class="col-sm-6 sp">
				    	<img src="${rr[11].pic}" class="img-responsive">
				    </a>	
					<p class="col-sm-6">${rr[11].text}</p>`;
					$("#right-bottom").html(hh);
	  } 
	})
// 顶部导航固定
   $(window).scroll(function(){
//   	console.log(1);
      var t=$(document).scrollTop();
      if(t>100){
      	$("header").addClass("fix");
      }else{$("header").removeClass("fix")}
   })
	   //侧导航显示隐藏
    var $show=$("#fixedtool");
	var $dil=$("#f1-size");
	$(window).scroll(function(){
	 if($dil.offset().top<$(window).scrollTop()+innerHeight/4){
	   $show.show();
	 }else $show.hide();
	})
		//顶部滑动
    $("#click").click(function(){
	  $("html,body").animate({scrollTop:
		 ($($(this).attr('href')).offset().top -1000)},1000)
	     })
     $("#c1").click(function(){
	   $("html,body").animate({scrollTop:
		   ($($(this).attr('href')).offset().top -20)},1000)
	  })   
	 $("#c2").click(function(){
	   $("html,body").animate({scrollTop:
		   ($($(this).attr('href')).offset().top -20)},1000)
	  })
//   楼层点亮
	  var $floor1=$("#li1");
	  var $floor2=$("#li2");
	  var $fl1=$("#f1-size");
	  var $fl2=$("#f2-size");
	  var $footer=$("#ft");
	  var $floor3=$("#li3");
	  $(window).scroll(function(){
	   if($fl1.offset().top<$(window).scrollTop()+innerHeight/4){
	     $floor1.css({background:"black"}).siblings().css({
		 background:"red"});
	   } 
	  })
      $(window).scroll(function(){
	   if($fl2.offset().top<$(window).scrollTop()+innerHeight/2){
	     $floor2.css({background:"black"}).siblings().css({
		   background:"red" });	
	   } 
	  })
	   $(window).scroll(function(){
	   if($footer.offset().top<$(window).scrollTop()+innerHeight){
	     $floor3.css({background:"black"}).siblings().css({
		   background:"red" });	
	   } 
	  })
  })
    