$(function(){
	var divPages=document.getElementById("pagination");
	var ulList=document.getElementById("i2");
	function load(pno=0){
		var kw=location.search.slice(4);
		$.ajax({
			type:"get",
			url:"data/article-kw.php",
			data:{kw,pno},
			dataType:"json",
			success:function(output){
				var {data,pageCount,pno}=output;
				var html="";
				for(var p of data){
					var {title,pic,text,jointime}=p;
					html+=`<li class="col-sm-12 col-xs-12">
				  <h3><a href="#">${p.title}</a></h3>
				  <div class="row">
					  <a href="#" id="aa"><img src="${p.pic}" class="col-sm-4 col-xs-12 col-md-4"></a>
				      <p class="col-sm-8 col-xs-12">${p.text}</p>
				  </div>
				  <div class="row" id="ff1">
					  <a href="#" class="glyphicon glyphicon-tag" class="col-sm-2 col-xs-4">网站建设</a>
					  <span class="glyphicon glyphicon-time" class="col-sm-2 col-xs-4">${p.jointime}</span>
					  <span class="glyphicon glyphicon-eye-open" class="col-sm-2 hidden-xs">浏览(<a href="#">188</a>)</span>
					  <span class="glyphicon glyphicon-heart" class="col-sm-2 col-xs-4" id="btn">喜欢(26)</span>
					  <a href="#" class="col-sm-2 hidden-xs">阅读原文&gt;&gt;</a>
				  </div>
				</li>`
				}
				console.log(html);
				ulList.innerHTML=html;
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
	}
	load();
})