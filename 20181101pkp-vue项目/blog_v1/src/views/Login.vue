<template>
    <div>
        <section class="container">
            <div class="row" id="only">
                <div class="col-sm-9 col-xs-12 left" style="background:white" >
                    <div class="row">
                        <p class="col-xs-12" style="border-bottom:2px solid black">您现在的位置是：<a href="index.html">首页</a> &gt; 信箱</p>
                        <div class="col-xs-12" id="isLogin">
                            <svg width="50" height="50">
                                <ellipse rx="20" ry="20" cx="25" cy="25" stroke-width="1" stroke="#E74851" fill="transparent"></ellipse>
                                <text x="10" y="30" @click='showLogin' font-size="16" fill="#E74851" id="logi">登录</text>
                            </svg>
                            <p style="color:orange" id="login_name"></p>
                        </div>
                        <!-- 评论区 -->
                    <div class="col-xs-12" id="area">
                        <span>畅  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;言<br>changyan</span>
                        <textarea cols="110" rows="100" onfocus="if(this.value=='来说两句吧...') {this.value='';}" onblur="if(this.value==''){this.value='来说两句吧...';}" id="say" @blur='sayBlur' v-model='text'>
                            来说两句吧...
                        </textarea>			
                        </div> <!--onfocus="blur(this) -->
                        <div class="col-xs-12" id="login">
                        <div class="row">
                            <ul>
                                <li id="face" @click='faceC'></li>
                                <li id="ico"></li>
                            </ul>
                            <div id="bbox">
                                <div></div>
                                <div id="emoj">
                                <ul>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                </ul>
                                <ul>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                </ul>
                                <ul>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                    <li><span></span></li>
                                </ul>
                                <ul>
                                    <li><span></span></li>				
                                </ul>
                                </div>
                            </div>
                            <span id="content" class="col-md-3 col-md-offset-5"></span>				 
                            <a class="btn btn-danger" id="read" @click='showSend'>畅谈一下</a>
                        </div>
                      </div>
                    </div>
                    <div class="row" id="speak">
                    <div class="col-xs-12">
                        <div class="row" id="title">
                            <ul class="col-md-1 col-sm-1 col-xs-4">
                                <li>评论</li>
                            </ul>
                            <span class="col-md-11 col-md-11 col-xs-8" ><strong>6666</strong>人参与，<strong>6666</strong>人评论</span>
                        </div>
                        <div class="row" id="message">
                            <div class="col-md-12 col-sm-12 col-xs-12 line" id='replay-msg'>
                                <h4>热门评论</h4>
                                <!-- 显示区 -->
                                <router-view :text='text' :list='list'></router-view>
                            </div>  
                        </div>
                    </div>		 
                    </div>
                </div>
                <div class="col-md-3 hidden-sm rig">
                    <ul class="list-unstyled">
                            <li class="col-sm-12 hidden-xs">
                                <h2 class="col-sm-12 col-sm-offset-3">关于我</h2>
                                <div class="col-sm-12 col-sm-offset-3"><img src="../assets/img/index/b04.jpg" class="img-circle">
                                </div>
                                <div class="col-sm-12">
                                <p>网名：十豆彡</p>
                                <p>职业：web前端工程师</p>
                                <p>星座：处女座</p>
                                <p>爱好：运动</p>
                            </div> 
                            </li>
                            <li class="col-sm-12 hidden-xs" id="on-chat">
                            <span>联系方式</span>
                            <img src="../assets/img/index/person.jpg">
                            </li>
                        </ul>	
                </div>
            </div>
        </section>
        <!--登录遮罩层-->
        <div id="hidden">
            <div id="log">
                <form submit.prevent='submmitL'>
                    <h3>PKP·博客<span @click='closeLogin'></span></h3>
                    <h3>登录</h3>
                    <p><input id="uname" v-model='username' @blur='unameLogin' type="text" placeholder="姓名" name="username"></p>
                    <span id="spn"></span>
                    <p><input id="upwd" v-model='password' @blur='upwdLogin' type="password" placeholder="密码" name="password"></p>
                    <span id="spu"></span>
                    <br>
                    <img id="setYzm" title="看不清点击换一张"  src="http://127.0.0.1/myproject1_show/blog_user/blog/data/code_gg.php" />
                    <p><input v-model='yzm' name='yzm' @blur='yzmLogin' id="yzm" type="text" placeholder="请输入验证码" required /></p>
                    <span id="yanz"></span><br>
                    <input type='submit' class="btn btn-danger" @click.prevent='doLogin' href="index.html" id="btn" value='登录'><br>
                    <span>如果您还没有浏览过此网站，请<router-link to='/message'>注册</router-link></span>
                </form>
            </div>
        </div>
         <!--个人中心-->
        <div class="container" id="enter-per">    
            <div class="row" id="reply">
                <div id="close"><span>×</span></div>
                <div  id="personal-l">	
                    <ul class="list-unstyled">
                        <li><span></span><i>我的</i></li>
                        <li><span></span><i>任务</i></li>
                        <li><span></span><i>热评</i></li>
                        <li><span></span><i>通知</i></li>
                        <li><span></span><i>反馈</i></li>
                        <li><span></span><i>设置</i></li>
                    </ul>		
                </div>
                <div id="personal-r">
                    
                    <div id="personal-change">
                        <div> 
                        <div id="flo1"></div>
                        <div id="top1" class="f-top">
                            <img src="../assets/img/message/22.jpg" class="img-circle">
                            <span id="user">zhangsan</span>
                            <span id="click-ins">
                            <input type="text" id="insert">
                            <button class=" btn btn-success" id="send">确定</button>	
                            </span>
                            <em></em>
                            <span class="btn" id="pic">点击修改</span> 
                            <span id="ph"></span>
                        </div>
                        <ul id="top2" class="f-top">
                                <li><span>评论</span></li>
                                <li><span>收藏</span></li>
                                <li><span>回复</span></li>
                        </ul>	
                        <div id="top3" class="f-top">
                            <ul id="per">
                                <li>
                                <img src="../assets/img/message/22.jpg" class="img-circle">
                                <span id="my" class="my-pe">我</span>
                                <em class="dele"></em>
                                <span id="del" class="del">删除</span>
                                <p>留言区。。。</p>
                                <div><a href="">留言板</a></div> 
                                </li>
                                <li>
                                <img src="../assets/img/message/22.jpg" class="img-circle">
                                <span class="my-pe">我</span>
                                <em class="dele"></em>
                                <span class="del">删除</span>
                                <p>留言区。。。</p>
                                <div><a href="">留言板</a></div> 
                                </li>
                            </ul>
                            <ul id="collect">
                                <li></li>
                            </ul>
                            <ul id="replay" class="rep">
                                <li><span></span></li>
                                <li><em></em></li>
                            </ul>
                        </div>
                        </div>
                        <div id="personal-rask"></div>
                        <div id="personal-rep"></div>
                        <div id="personal-notice">
                            <ul class="rep">
                                <li><span></span></li>
                                <li><em></em></li>
                            </ul>
                        </div>
                        <div id="personsl-answer">
                        <div>
                            <p>帮助与反馈</p>
                        </div>
                        <div>
                            <p>常见问题:</p>
                            <ul class="list-styled">
                                <li><a href="">什么是评论?</a></li>
                                <li><a href="">能否删除或修改自己的评论?</a></li>
                                <li><a href="">我的评论为什么被无故删除?</a></li>
                                <li><a href="">如何修改昵称头像?</a></li>
                            </ul>
                        </div>
                        <div>
                            <p>问题反馈：</p>
                            <textarea id="" cols="90" rows="8">当您在评论时遇到问题或建议，请发送给我们哦~</textarea>
                        </div>
                        <div>
                            <p>联系方式：<span>选填</span></p>
                            <input type="text" placeholder="QQ或手机">	
                        </div>
                        <div>
                            <p>插入图片：<span>选填</span></p>
                            <span>+</span>	
                            <p>最多可以插入9张</p>
                        </div>
                        <div><span class="btn">提交</span></div>
                        </div>
                        <div id="personal-set">
                            <div>
                            <span>系统设置</span>
                            <span><a href="javascript:;" id="logout" @click='loginout'>退出登录</a></span>
                            </div>
                            <div>
                            <p>消息提醒:</p> 
                            <ul>
                                    <li><i></i>网友回复提醒</li>
                                    <li><i></i>网友赞同提醒</li>
                                    <li><i></i>任务完成提醒</li>
                                    <li><i></i>收到道具提醒</li>
                                    <li><i></i>足迹提醒</li>
                                    <li><i></i>反馈回复提醒</li>
                                    <li><i></i>举报结果提醒</li>
                            </ul>
                            </div>
                            <div>
                            <span class="btn" id="sub">提交</span>
                            </div>
                        </div>
                    </div>
                </div>		
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import Comment from './comment.vue'
    export default{
        data(){
            return{
               username:'',
               password:'',
               yzm:'',
               text:'',
               list:[]
            }
        },
        component:{
            Comment
        },
        methods:{
            faceC(){
                $("#bbox").toggle();
            },
            fadeIn(){
                $("#apply").toggle({display:"block"});
            },
            sayBlur(){
                if($("#say").val()!=="来说两句吧..."){
                    $("#content").html("");
                }
            },
            //验证登录后可评论
            //https://codepen.io/xiguaxigua/pen/zoXWVX
            showSend(){
                if(this.text){
                this.$emit('send',this.text);
                this.text='';
                }else {alert('评论不能为空')}
              if($("#say").val()=="来说两句吧..."){
                    $("#content").html("评论内容不能为空!");
                            // history.go(0);
                }else if($("#login_name").html()==""){
                     alert("登录后才可以评论哦~");
                } 
                else{
                    var url=`http://127.0.0.1/myproject1_show/blog_user/blog/data/message.php?uname=`+this.username+`&text=`+this.text;
                        axios.get(url).then((result)=>{
                            console.log(result);                   
                        }).catch((err)=>{
                            console.log(err);
                        });
                     var urli=`http://127.0.0.1/myproject1_show/blog_user/blog/data/read_message.php`;axios.get(urli).then((result)=>{
                         console.log(result.data);                       
                     }).catch((err)=>{
                        console.log(err);
                     })                
                    }               
           }, 
            showLogin(){
                var html=document.querySelector("html");
                var body=document.querySelector("body");
                html.style.overflow="hidden";
                html.style.height="100%";
                body.style.overflow="hidden";
                body.style.height="100%";
                $("#hidden").css({display:"block"});
            },
            closeLogin(){
                $("#hidden").css({display:"none"});
                    var html=document.querySelector("html");
                    var body=document.querySelector("body");
                    html.style.overflow="visible";
                    html.style.height="100%";
                    body.style.overflow="visible";
                    body.style.height="100%";
            },
            unameLogin(){
                 if($("#uname").val()==""){
                    $("#spn").html("用户名不能为空");
                }else{
                    var $reg=/^[a-zA-Z0-9_]{3,12}$/;
                    if(!$reg.test($("#uname").val())){
                    $("#spn").html("请输入3到12位用户名")
                    }else{$("#spn").html("√")
                    }
                    }
            },
            upwdLogin(){
                if($("#upwd").val()==""){
                    $("#spu").html("密码不能为空");
                    }else{
                    var $reg=/^[a-zA-Z0-9_]{6,12}$/;
                    if(!$reg.test($("#upwd").val())){
                    $("#spu").html("请输入6到12位密码");
                    }else{$("#spu").html("√");
                    }
                }
            },
            yzmLogin(){
                if($("#yzm").val()==""){
                    $("#yanz").html("验证码不能为空");
                    }else{$("#yanz").html("√");
                }
            },
            submmitL(){
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
            },
            doLogin(){
                //异步请求
                var url=`http://127.0.0.1/myproject1_show/blog_user/blog/data/login.php?username=${this.username}&password=${this.password}`;
                axios.get(url).then((res)=>{
                    console.log(res.data);
                     if(res.data.code==1){
                         alert(res.data.msg);
                        //  this.$router.push("/");
                        $("#isLogin>p").html("欢迎"+res.data.data[1]);
                        //登录成功之后页面可以滚动
                            $("#hidden").css({display:"none"});
                            var html=document.querySelector("html");
                            var body=document.querySelector("body");
                            html.style.overflow="visible";
                            html.style.height="100%";
                            body.style.overflow="visible";
                            body.style.height="100%";
                            if(!res.data.data[0]){alert("未登录");}
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
                     }else alert(res.data.msg);
                }).catch((err)=>{
                    console.log(err);
                })
                $("#top2>li").click(function(){
                    var li=$(this);
                    var i=li.index();
                    $("#top3>ul").eq(i).fadeIn()
                        .siblings().hide();
                        $(this).css({borderBottom:"2px solid #1983FD"})
                            .siblings().css({borderBottom:"none"})
                    })
                $("#personal-l>ul>li:first-child>span").hover(function(){
                        $(this).css({backgroundImage:
                            "url("+require('../assets/img/login/tab-list-icon-active1.png')+")"})
                            $(this).next().css({color:"#1983FD"})
                        },function(){
                        $(this).css({backgroundImage:
                            "url("+require('../assets/img/login/tab-list-icon1.png')+")"})
                            $(this).next().css({color:"#666666"})
                        }) 
                        //2
                        $("#personal-l>ul>li:nth-child(2)>span").hover(function(){
                        $(this).css({backgroundImage:
                            "url("+require('../assets/img/login/task-ico-active.png')+")"})
                            $(this).next().css({color:"#1983FD"})
                        },function(){
                        $(this).css({backgroundImage:
                            "url("+require('../assets/img/login/task-ico.png')+")"})
                            $(this).next().css({color:"#666666"})
                        }) 
                        //3
                        $("#personal-l>ul>li:nth-child(3)>span").hover(function(){
                        $(this).css({backgroundImage:
                            "url("+require('../assets/img/login/hots_ico_active.png')+")"})
                            $(this).next().css({color:"#1983FD"})
                        },function(){
                        $(this).css({backgroundImage:
                            "url("+require('../assets/img/login/hots_ico.png')+")"})
                            $(this).next().css({color:"#666666"})
                        }) 
                        //4
                        $("#personal-l>ul>li:nth-child(4)>span").hover(function(){
                        $(this).css({backgroundImage:
                            "url("+require('../assets/img/login/tab-list-icon-active-notice.png')+")"})
                            $(this).next().css({color:"#1983FD"})
                        },function(){
                        $(this).css({backgroundImage:
                            "url("+require('../assets/img/login/tab-list-notice.png')+")"})   
                            $(this).next().css({color:"#666666"})
                        })
                        //5
                        $("#personal-l>ul>li:nth-child(5)>span").hover(function(){
                        $(this).css({backgroundImage:
                            "url("+require('../assets/img/login/tab-list-icon-active5.png')+")"})
                            $(this).next().css({color:"#1983FD"})
                        },function(){
                        $(this).css({backgroundImage:
                            "url("+require('../assets/img/login/tab-list-icon5.png')+")"})
                            $(this).next().css({color:"#666666"})
                        }) 
                        //6
                        $("#personal-l>ul>li:nth-child(6)>span").hover(function(){
                        $(this).css({backgroundImage:
                            "url("+require('../assets/img/login/set-icon-active.png')+")"})
                            $(this).next().css({color:"#1983FD"})
                        },function(){
                        $(this).css({backgroundImage:
                            "url("+require('../assets/img/login/set-icon.png')+")"})
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
                            .css({backgroundImage:"url("+require('../assets/img/login/btn-click.png')+")"}) 
                    })                   
            },
            //退出登录  
                 loginout(){
                    var url='http://127.0.0.1/myproject1_show/blog_user/blog/data/signout.php';
                    axios.get(url).then((res)=>{
                       console.log(res);
                    }).catch((err)=>{
                        console.log(err);
                        	alert("退出成功");
					        location.reload(true);
                    })
                 }
        },
        computed:{},
        watch:{},
        mounted(){
            //页面挂载出来，可以滚动
            $("#hidden").css({display:"none"});
            var html=document.querySelector("html");
            var body=document.querySelector("body");
            html.style.overflow="visible";
            html.style.height="100%";
            body.style.overflow="visible";
            body.style.height="100%";
        }
    }
</script>
<style>
   /*login.html*/
        .rig>ul>li p{
        margin:10px 0;
        height:30px;
        background:#F1F1F1;
        line-height:30px;
        border-radius:5px;
        }
        .rig>ul>li{
        background:white;
        border-radius:5px;
        margin:10px 5px; 
        border-top:2px solid black;
        }
        section{
        height:1500px;
        }
        /************/
        #only>div.left{
            height:auto;
            border-radius:5px;
        }
        #only>div.left>div>p{
            height:50px;
            line-height:50px;
        }
        #only>div.left div#area,div#show-hide{
            width:95%;
            height:150px;
            border:1px solid #E74851;
            margin-left:20px;
            border-radius:5px;
            text-align:center;
            overflow:hidden;
            position: relative;
        }
        ellipse,text{
        cursor:pointer;
        }
        #only>div.left div#area>textarea,div#show-hide>textarea{
            resize:none;
            border:none;
            outline:none;
            /*会出现滚动条 */
            color:gray;
        }
        div#area>span,div#show-hide>span{
            display:block;
            position: absolute;
            top:20%;
            left:40%;
            font-size:30px;
            color:gray;
            font-family:"microsoft yahei";
            opacity:0.3;
        }
        #login{
        margin-top:10px;
        height:30px;
        }
        #login>.row>ul{
        float:left;
        }
        #login>div>ul>li{
        float:left;
        margin-left:10px;
        cursor:pointer;
        }
        #login>div a{
        float:right;
        margin-right:10px;
        height:30px;
        }
        #login-show{
        margin:20px 0;
        }
        #login-show a{
        float:right;
        }
        #apply{
        display:none;
        }
        #login>div>ul>li:first-child{
        width:18px;
        height:18px;
        background:url("../assets/img/message/face.png") 0px 0px;
        }
        #login>div>ul>li:last-child{
        width:18px;
        height:18px;
        background:url("../assets/img/message/image.png") 0px 0px;
        }
        #speak>div{
        margin-top:50px;
        }
        #speak>div:first-child ul{
        width:60px;
        }
        #speak #title li{
        width:60px;
        height:30px;
        border:1px solid #E74851;
        border-bottom:none;
        border-top-left-radius:8px;
        border-top-right-radius:8px;
        line-height:30px;
        text-align:center;
        }
        #speak #title{
        height:30px;
        line-height:30px;
        }
        #speak #title>span{
        height:30px;
        border-bottom:1px solid #E74851;
        text-align:right;
        }
        #message img{
        width:60%;
        }
        #message>div{
        margin-top:20px;
        }

        .one .ding-active{
        display:inline-block;
        cursor:pointer;
        width:16px;
        height:15px;
        background:url("../assets/img/message/ding.png") 32px 15px;
        }
        .one .prop-ico{
        display:inline-block;
        width:20px;
        height:20px;
        background:url("../assets/img/message/prop-ico.png") 0px 0px;
        }
        .one span{
        margin:0 5px;
        }
        .one>div:nth-child(2)>span:nth-child(2){
        color:gray;
        }
        #title>ul>li{
        color:#E74851;
        }
        strong{
        font-size:20px;
        color:#E74851;
        }
        h4{
        color:#E74851;
        padding-left:5px;
        border-left:5px solid #E74851;
        border-radius:3px;
        }
        #on-chat{
        text-align:center;
        border-bottom:2px solid black;
        }
        #on-chat span{
        font-size:25px;
        }
        #on-chat img{
        width:180px;
        height:180px;
        }
        #fadeIn{
        cursor:pointer;
        }
        .line{
        border-bottom:1px dashed gray;
        }
        #content{
        color:red;
        }
        canvas{
        background: #ddd;
        }
        /*遮罩层*/
        #hidden{
            width:100%;
            height:1000px;
            /*display:none;*/
            position: fixed;
            top:0;
            left:0;
            z-index:1000;
            background:rgba(100,100,100,.3);
            display:none;
        }
        #log{
            width:400px;
            height:500px;
            text-align:center;
            background:white;
            margin:50px auto;
            border-radius:10px;
        }
        #log>form{
            width:400px;
            height:500px;
        }
        #log>form>h3:first-child{
            height:50px;
            line-height:50px;
            border-bottom:1px solid gray;
        }
        #log>form>h3:first-child>span{
            display:block;
            margin:5px 5px;
            float:right;
            width:12px;
            height:12px;
            cursor:pointer;
            background:url("../assets/img/message/close-btn.png");
        }
        #log>form input{
            width:300px;
            height:40px;
            border-radius:5px;
            border:1px solid gray;
        }
        #log>form span{
        color:red;
        font-weight:bold;
        }
        #log>form button{
            margin-left:5px;
        }

        /********************个人中心*****************************/
        #enter-per{
        width:100%;
        height:100%;
        position: fixed;
        top:0;
        right:0;
        z-index:1000;
        background:rgba(100,100,100,.8);
        display:none;
        }
        #enter-per #close{
        position: absolute;
        top:-13px;
        left:-3%;
        }
        #enter-per #close>span{
        color:white;
        font-weight:bold;
        font-size:35px;
        cursor:pointer;
        }
        #reply{
        width:800px;
        height:100%;
        display:flex;
        position: absolute;
        top:0px;
        right:15px;
        }
        #reply #personal-l{
        width:40px;
        background:#111111;
        }
        #personal-l>ul>li{
        width:40px;
        height:60px;
        text-align:center;
        margin-top:10px;
        background:#111111;
        color:#666666;
        cursor:pointer;
        }
        #personal-l>ul>li>span{
        margin-left:10px;
        display:block;
        width:20px;
        height:20px;
        }
        #personal-l>ul>li:first-child>span{
        background:url("../assets/img/login/tab-list-icon-active1.png") 22px 24px;
        }
        #personal-l>ul>li:first-child>i{
        color:#1983FD;
        }
        #personal-l>ul>li:nth-child(2)>span{
        background:url("../assets/img/login/task-ico.png") 22px 24px;
        }
        #personal-l>ul>li:nth-child(3)>span{
        background:url("../assets/img/login/hots_ico.png") 21px 20px;
        }
        #personal-l>ul>li:nth-child(4)>span{
        background:url("../assets/img/login/tab-list-notice.png") 22px 21px;
        }
        #personal-l>ul>li:nth-child(5)>span{
        background:url("../assets/img/login/tab-list-icon5.png") 21px 22px;
        }
        #personal-l>ul>li:nth-child(6)>span{
        background:url("../assets/img/login/set-icon.png") 21px 22px;
        }
        #personal-r{
        width:760px;
        height:100%;
        background:white;
        display:flex;
        }
        #personal-r .f-top{
        width:760px;
        }
        #personal-r #top1{
        height:auto;
        }
        #personal-r #top1>img{
        width:15%;
        margin-left:5px;
        }
        #personal-r #top1>#click-ins{
        display:none;
        }
        #personal-r #top1>#click-ins>input{
        height:34px;
        border-radius:5px;
        border:1px solid #D5D5D5;
        outline:none;
        }
        #personal-r #top1>#user{
        color:#666666;
        font-size:20px;
        }
        #personal-r #top1>em{
        display:inline-block;
        width:20px;
        height:20px;
        cursor:pointer;
        background:url("../assets/img/login/edit.png");
        }
        #personal-r #top1>#ph{
        display:inline-block;
        width:30px;
        height:30px;
        margin-top:5px;
        background:url("../assets/img/login/boy-80.png") 30px -3px;
        }
        #personal-r #top1>#ph{
        margin-left:450px;
        position: absolute;
        top:37px;
        right:38px;
        cursor:pointer;
        }
        #personal-r #top1>#pic{
        border:2px solid #38A3FD;
        color:#38A3FD;
        border-radius:20px;
        position: absolute;
        top:40px;
        right:10px;
        display:none;
        cursor:pointer;
        }
        #personal-r #top2{
        float:left;
        height:50px;
        border-bottom:1px solid #C3CAD4;
        }
        #personal-r ul#top2>li{
        float:left;
        width:50px;
        text-align:center;
        margin-left:130px;
        line-height:50px;
        cursor:pointer;
        }
        #personal-r ul#top2>li:first-child{
        border-bottom:2px solid #1983FD;
        }
        #personal-r #top3{
        height:auto;
        margin-top:10px; 
        }
        #personal-r #top3>ul#per{
        height:auto;
        margin-top:100px;
        }
        #personal-r #top3>ul#per>li{
        margin-top:50px;
        border-bottom:1px dashed gray;
        }
        #personal-r #top3 img{
        width:5%;
        margin-left:-35px;
        }
        #personal-r #top3 em.dele{
        display:inline-block;
        width:15px;
        height:17px;
        background:url("../assets/img/login/delete.png") 15px 0px;
        margin-left:610px;
        }
        #personal-r #top3>#collect,#personal-r .rep{
        width:760px;
        height:auto;
        text-align:center;
        margin-top:100px;
        display:none;
        }
        #personal-r .rep>li>span{
        display:block;
        margin:0 auto;
        width:300px;
        height:290px;
        background:url("../assets/img/login/notice-empty.png") 10px 0px;
        }
        #personal-r .rep>li>em{
        display:block;
        margin:0 auto;
        width:350px;
        height:22px;
        background:url("../assets/img/login/title-noreply.png") 3px 0px;
        }
        #personal-change{
        width:760px;
        height:100%;
        position: absolute;
        top:0px;
        left:40px;
        }
        #personal-change>#personal-change{
        width:760px;
        height:100%;
        background:white;
        display:flex;
        flex-flow:row wrap;
        }
        #personal-change>div#personal-set{
        width:760px;
        height:100%;
        background:white;
        display:flex;
        flex-flow:row wrap;
        display:none;
        }
        #personal-change>div#personal-set>div:first-child{
        width:760px;
        height:80px;
        }
        #personal-change>div#personal-set>div:first-child>span{
        font-size:20px;
        display:inline-block;
        width:100px;
        height:80px;
        line-height:80px;
        }
        #personal-change>div#personal-set>div:first-child>span:first-child{
        margin-left:20px;
        }
        #personal-change>div#personal-set>div:first-child>span:nth-child(2){
        margin-left:510px;
        }
        #personal-change>div#personal-set>div:nth-child(2){
        width:760px;
        text-align:center;
        margin-top:0;
        }
        #personal-change>div#personal-set>div:nth-child(2)>p{
        width:760px;
        height:50px;
        line-height:50px;
        margin-left:-111px;
        font-size:16px;
        }
        #personal-change>div#personal-set>div:nth-child(2)>ul{
        width:760px;
        height:300px;
        margin:0 auto;
        }
        #personal-change>div#personal-set>div:nth-child(2)>ul>li{
        width:100px;
        height:40px;
        line-height:40px;
        margin-left:300px;
        text-align:left;
        }
        #personal-change>div#personal-set>div:nth-child(2)>ul>li>i{
        display:inline-block;
        width:16px;
        height:16px;
        background:url("../assets/img/login/btn.png");
        }
        #personal-change>div#personal-set>div:nth-child(3){
        width:760px;
        height:50px;
        margin-top:150px;
        line-height:150px;
        border-top:1px solid #CCCCCC;	
        }
        #personal-change>div#personal-set>div:nth-child(3)>span#sub{
        border:2px solid #38A3FD;
        color:#38A3FD;
        width:100px;
        border-radius:20px;
        cursor:pointer;
        font-size:16px;
        margin-left:15px;
        }
        #personal-change>div#personal-set>div:nth-child(3)>span#sub:hover{
        background:#51ACF9;
        color:white;
        }

        #personal-change>#personsl-answer{
        width:760px;
        height:100%;
        display:flex;
        background:white;
        overflow-y: auto;
        overflow-x: hidden;
        display:none;
        }
        #personal-change>#personsl-answer>div:first-child>p{
        width:760px;
        height:50px;
        line-height:50px;
        font-size:20px;
        padding-left:25px;
        border-bottom:1px solid #CCCCCC; 
        }
        #personal-change>#personsl-answer>div:nth-child(2){
        position: absolute;
        top:60px;
        left:0;
        }
        #personal-change>#personsl-answer>div:nth-child(2) li{
        width:200px;
        height:30px;
        list-style:disc;
        margin-left:100px;
        }
        #personal-change>#personsl-answer>div:nth-child(2) li>a{
        color:black;
        }
        #personal-change>#personsl-answer>div:nth-child(2)>p{
        width:760px;
        height:50px;
        line-height:50px;
        font-size:16px;
        padding-left:45px;
        }
        #personal-change>#personsl-answer>div:nth-child(3){
        position:absolute;
        top:240px;
        left:52px;
        }
        #personal-change>#personsl-answer>div:nth-child(3)>p{
        height:50px;
        line-height:50px;
        font-size:16px;
        }
        #personal-change>#personsl-answer>div:nth-child(3)>textarea{
        resize:none;
        outline:none;
            /*会出现滚动条 */
        color:gray;
        }
        #personal-change>#personsl-answer>div:nth-child(4){
        position: absolute;
        top:480px;
        left:52px;
        }
        #personal-change>#personsl-answer>div:nth-child(4)>p{
        height:30px;
        line-height:30px;
        font-size:16px;
        }
        #personal-change>#personsl-answer>div:nth-child(4)>p>span{
        display:inline-block;
        font-size:14px;
        padding-left:545px;
        color:gray;
        }
        #personal-change>#personsl-answer>div:nth-child(4)>input{
        width:650px;
        height:40px;
        border-radius:5px;
        outline:none;
        border:1px solid gray;
        }
        #personal-change>#personsl-answer>div:nth-child(5){
        position: absolute;
        top:580px;
        left:51px;
        }
        #personal-change>#personsl-answer>div:nth-child(5)>p{
        height:30px;
        line-height:30px;
        font-size:16px;
        }
        #personal-change>#personsl-answer>div:nth-child(5)>p>span{
        display:inline-block;
        font-size:14px;
        padding-left:545px;
        color:gray;
        }
        #personal-change>#personsl-answer>div:nth-child(5)>span{
        display:inline-block;
        width:100px;
        height:100px;
        line-height:100px;
        text-align:center;
        font-size:25px;
        color:gray;
        border:1px solid gray;
        cursor:pointer;
        }
        #personal-change>#personsl-answer>div:nth-child(5)>p:last-child{
        color:gray;
        font-size:14px;
        }
        #personal-change>#personsl-answer>div:nth-child(6){
        position: absolute;
        top:760px;
        left:51px;
        }
        #personal-change>#personsl-answer>div:nth-child(6)>span{
        border:2px solid #38A3FD;
        color:#38A3FD;
        width:100px;
        border-radius:20px;
        cursor:pointer;
        font-size:16px;
        }
        #personal-change>#personsl-answer>div:nth-child(6)>span:hover{
        background:#51ACF9;
        color:white;
        }
        /************表情包*********************/
        #bbox{
        display:none;
        }
        #bbox>div:first-child{
        width:0;
        height:0;
        border:5px solid transparent;
        border-bottom:10px solid red;
        position: absolute;
        top:12px;
        left:54px;
        }
        #emoj{
        width:300px;
        height:145px;
        border:1px solid red;
        background:white;
        display:flex;
        flex-flow:row wrap;
        border-radius:5px;
        z-index:1000;
        position: absolute;
        top:27px;
        left:40px;
        }
        #emoj>ul{
        width:300px;
        height:35px;
        padding:0;
        margin-bottom:0;
        margin-left:5px;
        text-align:center;
        }
        #emoj>ul>li{
        width:40px;
        height:35px;
        line-height:45px;
        float:left;
        border:1px dashed #F1F1F1;
        cursor:pointer;
        }
        #emoj>ul:last-child{
        background:#F2F2F2;
        }
        #emoj>ul:last-child>li{
        background:white;
        }
        #emoj>ul>li>span{
        width:25px;
        height:23px;
        display:inline-block;
        }
        #emoj>ul:last-child>li>span{
        display:inline-block;
        width:20px;
        height:20px;
        }
        #emoj>ul:first-child>li:first-child>span{
        background:url("../assets/img/login/face-map.png");
        }
        #emoj>ul:first-child>li:nth-child(2)>span{
        background:url("../assets/img/login/face-map.png") 51px -22px;
        }
        #emoj>ul:first-child>li:nth-child(3)>span{
        background:url("../assets/img/login/face-map.png") 51px -46px;
        }
        #emoj>ul:first-child>li:nth-child(4)>span{
        background:url("../assets/img/login/face-map.png") 51px -69px;
        }
        #emoj>ul:first-child>li:nth-child(5)>span{
        background:url("../assets/img/login/face-map.png") 51px -94px;
        }
        #emoj>ul:first-child>li:nth-child(6)>span{
        background:url("../assets/img/login/face-map.png") 51px -119px;
        }
        #emoj>ul:first-child>li:nth-child(7)>span{
        background:url("../assets/img/login/face-map.png") 51px -142px;
        }
        #emoj>ul:first-child>li:nth-child(8)>span{
        background:url("../assets/img/login/face-map.png") 51px -165px;
        }
        #emoj>ul:nth-child(2)>li:first-child>span{
        background:url("../assets/img/login/face-map.png") 51px -192px;
        }
        #emoj>ul:nth-child(2)>li:nth-child(2)>span{
        background:url("../assets/img/login/face-map.png") 51px -236px;
        }
        #emoj>ul:nth-child(2)>li:nth-child(3)>span{
        background:url("../assets/img/login/face-map.png") 51px -282px;
        }
        #emoj>ul:nth-child(2)>li:nth-child(4)>span{
        background:url("../assets/img/login/face-map.png") 51px -329px;
        }
        #emoj>ul:nth-child(2)>li:nth-child(5)>span{
        background:url("../assets/img/login/face-map.png") 51px -352px;
        }
        #emoj>ul:nth-child(2)>li:nth-child(6)>span{
        background:url("../assets/img/login/face-map.png") 51px -375px;
        }
        #emoj>ul:nth-child(2)>li:nth-child(7)>span{
        background:url("../assets/img/login/face-map.png") 51px -398px;
        }
        #emoj>ul:nth-child(2)>li:nth-child(8)>span{
        background:url("../assets/img/login/face-map.png") 51px -423px;
        }

        #emoj>ul:nth-child(3)>li:first-child>span{
        background:url("../assets/img/login/face-map.png") 51px 24px;
        }
        #emoj>ul:nth-child(3)>li:nth-child(2)>span{
        background:url("../assets/img/login/face-map.png") 51px 49px;
        }
        #emoj>ul:nth-child(3)>li:nth-child(3)>span{
        background:url("../assets/img/login/face-map.png") 51px 72px;
        }
        #emoj>ul:nth-child(3)>li:nth-child(4)>span{
        background:url("../assets/img/login/face-map.png") 51px 94px;
        }
        #emoj>ul:nth-child(3)>li:nth-child(5)>span{
        background:url("../assets/img/login/face-map.png") 51px 113px;
        }
        #emoj>ul:nth-child(3)>li:nth-child(6)>span{
        background:url("../assets/img/login/face-map.png") 51px 252px;
        }
        #emoj>ul:nth-child(3)>li:nth-child(7)>span{
        background:url("../assets/img/login/face-map.png") 51px 299px;
        }
        #emoj>ul:nth-child(3)>li:nth-child(8)>span{
        background:url("../assets/img/login/face-map.png") 51px 344px;
        }
        #emoj>ul:nth-child(4)>li>span{
        background:url("../assets/img/login/face-ico-grey.png") 0px 0px;
        }
       div.one{
        height:150px;
        /* border-bottom:1px dashed black;*/
        } 
</style>
