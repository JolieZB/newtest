// 最新文章
$(function(){
 function loadBlog(pno,pageSize){
	$.ajax({
	  type:"get",
	  url:"data/article_list.php",
	  data:{pno:pno,pageSize:pageSize},
	  dataType:"json",
	  success:function(data){
		var html="";
		for(var item of data.data){
		html+=`<li class="col-sm-12 col-xs-12">
				  <h3><a href="#">${item.title}</a></h3>
				  <div class="row">
					  <a href="#" id="aa"><img src="${item.pic}" class="col-sm-4 col-xs-12 col-md-4"></a>
				      <p class="col-sm-8 col-xs-12">${item.text}</p>
				  </div>
				  <div class="row" id="ff1">
					  <a href="#" class="glyphicon glyphicon-tag" class="col-sm-2 col-xs-4">网站建设</a>
					  <span class="glyphicon glyphicon-time" class="col-sm-2 col-xs-4">${item.jointime}</span>
					  <span class="glyphicon glyphicon-eye-open" class="col-sm-2 hidden-xs">浏览(<a href="#">188</a>)</span>
					  <span class="glyphicon glyphicon-heart" class="col-sm-2 col-xs-4" id="btn">喜欢(26)</span>
					  <a href="#" class="col-sm-2 hidden-xs">阅读原文&gt;&gt;</a>
				  </div>
				</li>`;}
                  $("#i2").html(html);
         var hh="";
		 var pno=parseInt(data.pno);
		            hh+=`<li class="disabled"><a href="#">共${data.pageCount}页</a></li>`;				
		            hh+=`<li><a href="#">上一页</a></li>`;
					if(pno-2>0) hh+=`<li><a href="#">${pno-2}</a></li>`;
                    if(pno-1>0)hh+=`<li><a href="#">${pno-1}</a></li>`;
                    hh+=`<li class="active"><a href="#">${pno}</a></li>`;
                    if(pno+1<=data.pageCount)hh+=`<li><a href="#">${pno+1}</a></li>`;
                    if(pno+2<=data.pageCount)hh+=`<li><a href="#">${pno+2}</a></li>`;
                    hh+=`<li><a href="#">下一页</a></li>`;		
		 $(".pagination").html(hh);
	  }
	})
   } loadBlog(1,13);
	$("#pagination").on("click","li a",function(e){
//		console.log(1);
		e.preventDefault();
      var pno=$(this).html();
      loadBlog(pno,13);
  })
	
})