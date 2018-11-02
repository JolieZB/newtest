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
//验证textarea用户是否输入数据
    $("#read").click(function(){
        if($("#say").val()=="来说两句吧..."){
            $("#content").html("评论内容不能为空!");
            // history.go(0);
        }else {
           alert("请登录后发表评论！");
            $("#content").html("");
        };
    });
    $("#say").blur(function(){
      if($("#say").val()!=="来说两句吧..."){
        $("#content").html("");
      }
    })
 //点击验证码刷新
 $("#c3").click(function(){
     location.href="message.html";
     var html=document.querySelector("html");
     var body=document.querySelector("body");
     html.style.overflow="hidden";
     html.style.height="100%";
     body.style.overflow="hidden";
     body.style.height="100%";
     $("#hidden").css({display:"block"});
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
    //异步验证失去焦点用户名是否存在
    $.ajax({
      type:"get",
      url:"data/isregister.php",
      dataType:"json",
      success:function(data){
        // console.log(data);
       if($("#uname").val()==""){
            $("#spn").html("用户名不能为空")
         }else{
            var $reg=/^[a-zA-Z0-9_]{3,12}$/;
            if(!$reg.test($("#uname").val())){
               $("#spn").html("请输入3到12位用户名")
            }else if($("#uname").val()==data){
              $("#spn").html("此用户名已存在");
            }else{$("#spn").html("√");            
         }
       }
      },
      error:function(){
        console.log("网络故障，请检查");
      }
    })
   
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
  //重复密码验证
  $("#cpwd").blur(function(){
    if($("#cpwd").val()==""){
	  $("#cpu").html("请确认密码");
	}else{
    if($("#upwd").val()!==$("#cpwd").val()){
	 $("#cpu").html("两次密码输入不一致");
	}else{$("#cpu").html("√")}
	}
  })
  //手机号失去焦点验证
  $("#uphone").blur(function(){
   if($("#uphone").val()==""){
    $("#uph").html("手机号不能为空");
   }else{
      var $reg=/^1[34578]\d{9}$/;
	  if(!$reg.test($("#uphone").val())){
	   $("#uph").html("手机号格式不正确");
	  }else{$("#uph").html("√")}
   }
  })
})
//验证表单注册框
 function isregister(){
    //异步验证用户名是否存在
	 var username=$("#uname").val();
  $.ajax({
      type:"get",
      url:"data/isregister.php",
	  data:{username:username},
      dataType:"json",
      success:function(data){
//		  console.log(data);
    if($("#uname").val()==""){
     $("#spn").html("用户名不能为空");
	    return false;
     }else{
	    var $reg=/^[a-zA-Z0-9_]{3,12}$/;
	    if(!$reg.test($("#uname").val())){
	        $("#spn").html("请输入3到12位用户名");
	        return false;
	        }else if($("#uname").val()==data){
              $("#spn").html("此用户名已存在");
            }	return false;   
    } 
   }
 })  
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
	if($("#cpwd").val()==""){
	  $("#cpu").html("请确认密码");
	  return false;
	}
    if($("#upwd").val()!==$("#cpwd").val()){
	 $("#cpu").html("两次密码输入不一致");	
	 return false;
	}
	if($("#uphone").val()==""){
    $("#uph").html("手机号不能为空");
	 return false;
   }else{
      var $reg=/^1[34578]\d{9}$/;
	  if(!$reg.test($("#uphone").val())){
	   $("#uph").html("手机号格式不正确");
	     return false;
	  }	 
   }
    alert("注册成功,请登录！");
   return true;    
  }