$(function(){
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
})