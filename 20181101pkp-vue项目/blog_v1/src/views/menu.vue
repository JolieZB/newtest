<template>
    <div>
      <h2 style="text-align:center">伸缩二级菜单</h2>
     <ul class="tree" style="text-align:center">
		<li>
			<span class="open">考勤管理</span>
			<ul>
				<li>日常考勤</li>
				<li>请假申请</li>
				<li>加班/出差</li>
			</ul>
		</li>
		<li>
			<span>信息中心</span>
			<ul>
				<li>通知公告</li>
				<li>公司新闻</li>
				<li>规章制度</li>
			</ul>
		</li>
		<li><span>协同办公</span>
			<ul>
				<li>公文流转</li>
				<li>文件中心</li>
				<li>内部邮件</li>
				<li>即时通信</li>
				<li>短信提醒</li>
			</ul>
		</li>
	</ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
            
            }
        },
        methods:{
          
        },
        mounted(){
            	 //查找触发事件的元素
	//绑定事件
		//查找要修改的元素
		//修改元素

	//查找触发事件的元素
	var spans=
		document.querySelectorAll("ul.tree>li>span");
	//绑定事件
	for(var span of spans){
		span.onclick=function(){
			var span=this;
			//如果当前span的class是open
			if(span.className==="open")
				span.className="";//清除当前span的class
			else{//否则
				//查找ul.tree下的li下的class为open的span,保存在变量openSpan中
				var openSpan=document.querySelector(
					"ul.tree>li>span.open"
				);
				if(openSpan!=null)//如果找到openSpan
					//清除openSpan的class
					openSpan.className="";
				//给当前span设置class为open
				span.className="open";
		}
	}
}
        }
  }
</script>
<style>
   li{
	list-style:none;
}
  li span{
	padding-left: 20px;
	cursor: pointer;
  background: url("../assets/img/add.png") no-repeat center left;
}
  li ul{
	height:0;
	overflow:hidden;
	transition:all .5s linear;
  }
  .open{ background: url("../assets/img/minus.png") no-repeat center left; }
  .open+ul{ height:104px; }
</style>