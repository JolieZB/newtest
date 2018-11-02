<template>
    <div>
        <section class="container">
            <div class="row" id="only">
                <div class="col-sm-9 col-xs-12 left" style="background:white" >
                    <div class="row">
                        <p class="col-xs-12" style="border-bottom:2px solid black">您现在的位置是：首页 &gt; 信箱</p>
                        <div class="col-xs-12">
                        <svg width="50" height="50">
                            <ellipse rx="20" ry="20" cx="25" cy="25" stroke-width="1" stroke="#E74851" fill="transparent"></ellipse>
                            <text @click="showRegister" x="10" y="30" font-size="16" fill="#E74851" id="logi">登录</text>
                        </svg>
                        </div>
                        <div class="col-xs-12" id="area"><span>畅  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;言<br>changyan</span>
                        <textarea cols="110" rows="100" onfocus="if(this.value=='来说两句吧...'){this.value='';}" onblur="if(this.value==''){this.value='来说两句吧...';}" id="say" @blur="blur">来说两句吧...</textarea>			
                        </div> <!--onfocus="blur(this) -->
                        <div class="col-xs-12" id="login">
                        <div class="row">
                            <ul>
                                <li id="face"></li>
                                <li id="ico"></li>
                            </ul>
                            <span id="content" class="col-md-3 col-md-offset-5"></span>				 
                            <a class="btn btn-danger" @click="read" id="read">畅谈一下</a>
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
                            <div class="col-md-12 col-sm-12 col-xs-12 line">
                                <h4>热门评论</h4>
                                <div class="row one">
                                <div class="col-xs-2">
                                    <img src="../assets/img/message/22.jpg" class="img-circle"> 
                                </div>
                                <div class="col-md-10" style="height:30px">
                                    <span><a href="#" style="color:red">张**</a></span>
                                    <span>[河南省平顶山市网友]</span>
                                    <span>2018年8月20日</span>
                                    </div>
                                <div class="col-md-10"><span>又经历了一次小改版，解决首页模块参差不齐的问题，留言板、关于栏目主内容区两端对齐，改善了移动端导航太大的问题，欢迎访问，魏义齐个人博客。</span></div>
                                <div class="col-md-3 col-md-offset-9 col-xs-12">
                                    <span id="fadeIn" @click='toggle'>回复      
                                    </span>
                                    <span class="ding-active" id="ding-active" @click='active' @mouseenter="en" @mouseleave='lea'></span>
                                    <a href="#" class="count" id="count">0</a>
                                    <span class="prop-ico" id="prop-ico"></span>
                                    </div>
                                    <div class="col-sm-12" id="apply">
                                        <div class="col-xs-12" id="show-hide"> 
                                        <span>畅  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;言<br>changyan</span>
                                        <textarea cols="110" rows="100" onfocus="if(this.value=='来说两句吧...'){this.value='';}" onblur="if(this.value==''){this.value='来说两句吧...';}">来说两句吧...</textarea>			
                                        </div> <!--onfocus="blur(this) -->
                                        <div class="col-xs-12" id="login-show">
                                        <div class="row">	
                                            <span class="col-md-3 col-md-offset-5 content"></span>	 
                                            <a class="btn btn-danger col-md-3 col-xs-12">畅谈一下</a>
                                        </div>
                                        </div>
                                    </div>    
                                </div>
                            </div> 
                            <div class="col-md-12 col-sm-12 col-xs-12 line">
                                <h4>最新评论</h4>
                                <div class="row one">
                                    <div class="col-xs-2">
                                        <img src="../assets/img/message/22.jpg" class="img-circle"> 
                                    </div>
                                <div class="col-md-10" style="height:30px">
                                    <span><a href="#" style="color:red">张**</a></span>
                                    <span>[河南省郑州市网友]</span>
                                    <span>2018年9月11日</span>
                                    </div>
                                <div class="col-md-10"><span>又经历了一次小改版，解决首页模块参差不齐的问题，留言板、关于栏目主内容区两端对齐，改善了移动端导航太大的问题，欢迎访问，魏义齐个人博客。</span></div>
                                <div class="col-md-3 col-md-offset-9 col-xs-12">
                                    <span>回复</span>
                                    <span class="ding-active"></span>
                                    <a href="#" class="count">0</a>
                                    <span class="prop-ico"></span>
                                    </div>
                                </div>
                                 <div class="row one">
                                    <div class="col-xs-2">
                                        <img src="../assets/img/message/22.jpg"class="img-circle"> 
                                    </div>
                                    <div class="col-md-10" style="height:30px">
                                        <span><a href="#" style="color:red">刘**</a></span>
                                        <span>[河南省郑州市网友]</span>
                                        <span>2018年8月31日</span>
                                        </div>
                                    <div class="col-md-10"><span>谢谢~！</span></div>
                                    <div class="col-md-3 col-md-offset-9 col-xs-12">
                                        <span>回复</span>
                                        <span class="ding-active"></span>
                                        <a href="#" class="count">0</a>
                                        <span class="prop-ico"></span>
                                        </div>
                                    </div>
                                    <div class="row one">
                                    <div class="col-xs-2">
                                        <img src="../assets/img/message/22.jpg"class="img-circle"> 
                                    </div>
                                    <div class="col-md-10" style="height:30px">
                                        <span><a href="#" style="color:red">李**</a></span>
                                        <span>[河南省郑州市网友]</span>
                                        <span>2018年8月22日</span>
                                        </div>
                                    <div class="col-md-10"><span>学到很多关于前端的小技巧,非常感谢</span></div>
                                    <div class="col-md-3 col-md-offset-9 col-xs-12">
                                        <span>回复</span>
                                        <span class="ding-active"></span>
                                        <a href="#" class="count">0</a>
                                        <span class="prop-ico"></span>
                                        </div>
                                    </div>
                            </div> 
                        </div>
                    </div>		 
                    </div>
                </div>
                <div class="col-md-3 hidden-sm right">
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
        <!--注册遮罩层-->
        <div id="hidden">
            <div id="log">
                <form>
                    <h3>PKP·博客<span @click="close"></span></h3>
                    <h3>注册</h3>
                    <p><input id="uname" @blur='uname' v-model='Dusername' type="text" placeholder="姓名" name="username"></p>
                    <span id="spn"></span>
                    <p><input id="upwd" @blur='upwd' v-model='Dpassword' type="password" placeholder="密码" name="password"></p>
                    <span id="spu"></span>
                    <p><input id="cpwd" @blur='cpwd' type="password" placeholder="重复密码"></p>
                    <span id="cpu"></span>
                    <p><input id="uphone" @blur='phone' v-model='Dphone' type="tel" placeholder="手机号" name="phone"></p>
                    <span id="uph"></span><br>
                    <input type="submit" id="lo"
                    class="btn btn-danger" value="注册" @click.prevent='isregister'><br>
                    <span>如果您浏览过本网站,<router-link to='/login'>请登录</router-link></span>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
 import axios from 'axios'
    export default{
        data(){
          return{
            Dusername:'',
            Dpassword:'',
            Dphone:''
          }
        },
        components: {},
        methods: {
            //打开注册框
            showRegister(){
                    var html=document.querySelector("html");
                    var body=document.querySelector("body");
                    html.style.overflow="hidden";
                    html.style.height="100%";
                    body.style.overflow="hidden";
                    body.style.height="100%";
                    $("#hidden").css({display:"block"});
            },
            close(){
                $("#hidden").css({display:"none"});
                var html=document.querySelector("html");
                var body=document.querySelector("body");
                html.style.overflow="visible";
                html.style.height="100%";
                body.style.overflow="visible";
                body.style.height="100%";
            },
            read(){
                if($("#say").val()=="来说两句吧..."){
                    $("#content").html("评论内容不能为空!");
                }else {
                alert("请登录后发表评论！");
                    $("#content").html("");
                };
           },
           blur(){
               if($("#say").val()!=="来说两句吧..."){
               $("#content").html("");
              }
           },
           //点赞
           active(){
               var x=0;
                $("#count").html(++x);
                $(this).css({backgroundImage:"url("+require('../assets/img/message/ding-active.png')+")"});
                $("#prop-ico").css({transform:"Rotate(360deg)",transition:"all .5s linear"})
           },
           en(){
             $(this).css({backgroundImage:"url("+require('../assets/img/message/ding-active.png')+")"});
           },
           lea(){
             $(this).css({backgroundImage:"url("+require('../assets/img/message//ding.png')+")"});
           },
           toggle(){
               $("#apply").toggle({display:"block"});
           },
           //用户名异步验证
           uname(){
               var url=`http://127.0.0.1/myproject1_show/blog_user/blog/data/isregister.php`;
               axios.get(url).then((res)=>{
                    // console.log(res);
                    if($("#uname").val()==""){
                     $("#spn").html("用户名不能为空")
                   }else{
                        var $reg=/^[a-zA-Z0-9_]{3,12}$/;
                        if(!$reg.test($("#uname").val())){
                        $("#spn").html("请输入3到12位用户名")
                        }else if($("#uname").val()==res.data){
                        $("#spn").html("此用户名已存在");
                        }else{$("#spn").html("√");            
                    }
                }
               }).catch((err)=>{
                   console.log(err);
               })
           },
           upwd(){
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
           cpwd(){
               if($("#cpwd").val()==""){
                $("#cpu").html("请确认密码");
                }else{
                if($("#upwd").val()!==$("#cpwd").val()){
                $("#cpu").html("两次密码输入不一致");
                }else{$("#cpu").html("√")}
                }
           },
           phone(){
               if($("#uphone").val()==""){
                    $("#uph").html("手机号不能为空");
                }else{
                    var $reg=/^1[34578]\d{9}$/;
                    if(!$reg.test($("#uphone").val())){
                    $("#uph").html("手机号格式不正确");
                    }else{$("#uph").html("√")}
                }
           },
           isregister(){
              var url=`http://127.0.0.1/myproject1_show/blog_user/blog/register.php?username=${this.Dusername}&password=${this.Dpassword}&phone=${this.Dphone}`;
                axios.get(url).then((res)=>{
                   console.log(res.data);
                    if(res.data.code==1){
                       alert("注册成功");
                       this.$router.push('/login');
                   }else { alert("注册失败");}
                   })     
               .catch((err)=>{
                   console.log(err);
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
                return true;     
           }
        },
        computed: {},
        watch: {},
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
    /*message.css*/
    .right>ul>li p{
    margin:10px 0;
    height:30px;
    background:#F1F1F1;
    line-height:30px;
    border-radius:5px;
    }
    .right>ul>li{
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
    div.one{
    height:150px;
    /* border-bottom:1px dashed black;*/
    }
</style>
