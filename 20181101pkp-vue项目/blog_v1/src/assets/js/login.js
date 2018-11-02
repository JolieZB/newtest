$(function(){
 var $header=$("#header");
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
    // 点赞
    $("#ding-active").click(function(){
        var x=0;
        $("#count").html(++x);
        $(this).css({backgroundImage:"url(img/message/ding-active.png)"});
        $("#prop-ico").css({transform:"Rotate(360deg)",transition:"all .5s linear"})
    })
    $("#ding-active").hover(function(){
        $(this).css({backgroundImage:"url(img/message/ding-active.png)"});
    },function(){
        $(this).css({backgroundImage:"url(img/message/ding.png)"});
    })
    $("#face").hover(function(){
        $(this).css({backgroundImage:"url(img/message/face-active.png)"});
    },function(){
        $(this).css({backgroundImage:"url(img/message/face.png)"});
    })
    $("#ico").hover(function(){
        $(this).css({backgroundImage:"url(img/message/image-green.png)"});
    },function(){
        $(this).css({backgroundImage:"url(img/message/image.png)"});
    })
    $("#fadeIn").click(function(){
        // console.log(1);
        $("#apply").toggle({display:"block"});
    })
    //表情
	$("#face").click(function(){
	  $("#bbox").toggle();
	})
    $("#emoj ul>li").hover(function(){
	  var $li=$(this);
	  $li.css({background:"#F2F2F2"}).siblings()
		  .css({background:"white"});
	},function(){
		var $li=$(this);
	    $li.css({background:"white"}).siblings()
			.css({background:"#F2F2F2"});
	  })
//验证textarea用户是否输入数据
    $("#read").click(function(){
        if($("#say").val()=="来说两句吧..."){
            $("#content").html("评论内容不能为空!");
            // history.go(0);
        }else {
            alert("请登录");
            
        };
    });
    $("#say").blur(function(){
      if($("#say").val()!=="来说两句吧..."){
        $("#content").html("");
      }
    })
    //点击出现登陆框，页面不能滚动
    $("text").click(function(){
        var html=document.querySelector("html");
        var body=document.querySelector("body");
        html.style.overflow="hidden";
        html.style.height="100%";
        body.style.overflow="hidden";
        body.style.height="100%";
        $("#hidden").css({display:"block"});
    })
    //点击关闭 ，登陆框隐藏，页面可以滚动
    $("#hidden>#log>form>h3>span").click(function(){
        $("#hidden").css({display:"none"});
        var html=document.querySelector("html");
        var body=document.querySelector("body");
        html.style.overflow="visible";
        html.style.height="100%";
        body.style.overflow="visible";
        body.style.height="100%";
    })
  //用户名失去焦点
  $("#uname").blur(function(){   
   if($("#uname").val()==""){
     $("#spn").html("用户名不能为空");
   }else{
	  var $reg=/^[a-zA-Z0-9_]{3,12}$/;
	  if(!$reg.test($("#uname").val())){
	   $("#spn").html("请输入3到12位用户名")
	  }else{$("#spn").html("√")
	   }
	 }
 })
  //密码失去焦点
  $("#upwd").blur(function(){
    if($("#upwd").val()==""){
	  $("#spu").html("密码不能为空");
	}else{
     var $reg=/^[a-zA-Z0-9_]{6,12}$/;
	 if(!$reg.test($("#upwd").val())){
	  $("#spu").html("请输入6到12位密码");
	 }else{$("#spu").html("√");
	}
   }
  })
 //验证码失去焦点
  $("#yzm").blur(function(){
    if($("#yzm").val()==""){
	  $("#yanz").html("验证码不能为空");
	}else{$("#yanz").html("√");
  }})
//验证表单登录框
 $("#btn").click(function(e){
	e.preventDefault();
	var username=$("#uname").val();
	var password=$("#upwd").val();
	var yzm=$("#yzm").val();
   if($("#uname").val()==""){
     $("#spn").html("用户名不能为空");
	 return false;
   }else{
	  var $reg=/^[a-zA-Z0-9_]{3,12}$/;
	  if(!$reg.test($("#uname").val())){
	   $("#spn").html("请输入3到12位用户名")
	  return false;
	   }	   
   }    
    if($("#upwd").val()==""){
	  $("#spu").html("密码不能为空");
	  return false;
	}else{
     var $reg=/^[a-zA-Z0-9_]{6,12}$/;
	 if(!$reg.test($("#upwd").val())){
	  $("#spu").html("请输入6到12位密码");	
	   return false;
	 } 
	}	
  $.ajax({
    type:"POST",
    url:"data/login.php",//相对于html文件的相对路径
    data:{username:username,password:password,yzm:yzm},
    success:function(data){
    if(data.code>0){
           alert(data.msg);
//		   console.log(data.data);		
//           location.href="login.html";
		   $("#isLogin>p").html("欢迎"+data.data[1]);
       //登录成功之后页面可以滚动
		  $("#hidden").css({display:"none"});
        var html=document.querySelector("html");
        var body=document.querySelector("body");
        html.style.overflow="visible";
        html.style.height="100%";
        body.style.overflow="visible";
        body.style.height="100%";
        //登录成功之后可以评论
          if(!data.data[0]){alert("未登录");}
		  else{
             //个人中心 点击登录出现个人中心页面
             $("text").click(function(){
			  $("#enter-per").fadeIn();
              $("#hidden").css({display:"none"});		   
			 })
             $("#close").click(function(){
			   $("#enter-per").fadeOut();
			   var html=document.querySelector("html");
               var body=document.querySelector("body");
               html.style.overflow="visible";
               html.style.height="100%";
               body.style.overflow="visible";
               body.style.height="100%";
			 })
		  }
             
         }else{alert(data.msg);}
    },
    error:function(){
       //php语法错误 sql json
        alert("网络故障，请检查");
     }
  })
return true; 
 })
//个人中心//
 $("#top2>li").click(function(){
   var li=$(this);
   var i=li.index();
   $("#top3>ul").eq(i).fadeIn()
	   .siblings().hide();
     $(this).css({borderBottom:"2px solid #1983FD"})
		.siblings().css({borderBottom:"none"})
  })

// 个人中心左侧 
     //1
	$("#personal-l>ul>li:first-child>span").hover(function(){
	   $(this).css({backgroundImage:
		   "url(img/login/tab-list-icon-active1.png)"})
        $(this).next().css({color:"#1983FD"})
	},function(){
	   $(this).css({backgroundImage:
		   "url(img/login/tab-list-icon1.png)"})
		$(this).next().css({color:"#666666"})
	}) 
    //2
    $("#personal-l>ul>li:nth-child(2)>span").hover(function(){
	   $(this).css({backgroundImage:
		   "url(img/login/task-ico-active.png)"})
        $(this).next().css({color:"#1983FD"})
	},function(){
	   $(this).css({backgroundImage:
		   "url(img/login/task-ico.png)"})
		$(this).next().css({color:"#666666"})
	}) 
	//3
    $("#personal-l>ul>li:nth-child(3)>span").hover(function(){
	   $(this).css({backgroundImage:
		   "url(img/login/hots_ico_active.png)"})
        $(this).next().css({color:"#1983FD"})
	},function(){
	   $(this).css({backgroundImage:
		   "url(img/login/hots_ico.png)"})
		$(this).next().css({color:"#666666"})
	}) 
	//4
    $("#personal-l>ul>li:nth-child(4)>span").hover(function(){
	   $(this).css({backgroundImage:
		   "url(img/login/tab-list-icon-active-notice.png)"})
        $(this).next().css({color:"#1983FD"})
	},function(){
	   $(this).css({backgroundImage:
		   "url(img/login/tab-list-notice.png)"})
		$(this).next().css({color:"#666666"})
	})
	 //5
    $("#personal-l>ul>li:nth-child(5)>span").hover(function(){
	   $(this).css({backgroundImage:
		   "url(img/login/tab-list-icon-active5.png)"})
        $(this).next().css({color:"#1983FD"})
	},function(){
	   $(this).css({backgroundImage:
		   "url(img/login/tab-list-icon5.png)"})
		$(this).next().css({color:"#666666"})
	}) 
    //6
    $("#personal-l>ul>li:nth-child(6)>span").hover(function(){
	   $(this).css({backgroundImage:
		   "url(img/login/set-icon-active.png)"})
        $(this).next().css({color:"#1983FD"})
	},function(){
	   $(this).css({backgroundImage:
		   "url(img/login/set-icon.png)"})
		$(this).next().css({color:"#666666"})
	}) 
    //点击修改图标
	$("#ph").hover(function(){
	    $("#ph").hide();
	},function(){
	  $("#pic").show();
	})
    $("#pic").mouseout(function(){
	 $("#ph").show();
     $("#pic").hide();
	})
   //点击修改昵称
	$("#top1>em").click(function(){
     $("#user").hide();
	 $("#top1>em").hide();
     $("#click-ins").fadeIn();
	 $("#insert").val($("#user").html());
	})
	$("#send").click(function(){
	 if($("#insert").val()==""){
	   alert("昵称不能为空");
	 }else{
	   alert("昵称已经提交，请等待审核");
       $("#user").show();
	   $("#top1>em").show();
	   $("#click-ins").hide();
	 }
	})
  //个人中心右侧
  $("#personal-l>ul>li").click(function(){
    var $li=$(this);
    var i=$li.index();
    $("#personal-change>div").eq(i).fadeIn().siblings().hide();
  })
   $("#personal-set>div:nth-child(2)>ul>li").click(function(){
    var $li=$(this);
    var i=$li.index();
    $("#personal-set>div:nth-child(2)>ul>li>i").eq(i)
		.css({backgroundImage:"url(img/login/btn-click.png)"}) 
  })
//退出登录
	$("#logout").click(function(e){
	 e.preventDefault();
			$.ajax({
				type:"get",
				url:"data/signout.php",
				success:function(){
					alert("退出成功");
					location.reload(true);
				}
	})
  })
})