<template>
 <div id='h1'>
    <section class="container">
        <div class="row" id="ro">
    <!--轮播图-->
            <div class="col-sm-4 col-xs-12">
	          <img :src="require('../assets/'+result[0].image)" class="img-responsive">
	        </div>
            <div class="col-sm-4 col-xs-12">
                <div class="carousel slide" data-ride="carousel" data-interval="2000"  data-pause="null" id="sho">
                    <div class="carousel-inner">
                        <div class="item active"><img :src="require('../assets/'+result[1].image)" class="img-responsive"></div>
                        <div class="item"><img :src="require('../assets/'+result[2].image)" class="img-responsive"></div>
                        <div class="item"><img :src="require('../assets/'+result[3].image)" class="img-responsive"></div>
                    </div>
                    <ul class="carousel-indicators">
                        <li data-slide-to="0" data-target="#sho" class="active"></li>
                        <li data-slide-to="1" data-target="#sho"></li>
                        <li data-slide-to="2" data-target="#sho"></li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-4 col-xs-12">
                <img :src="require('../assets/'+result[4].image)" class="img-responsive">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-9 col-xs-12 left">
            <div class="row" id="f1-size">
                <span class="col-sm-3 col-xs-12" id="h2">个人博客模板</span>
                <a href="#" class="col-sm-3 hidden-xs col-sm-offset-6">个人博客模板</a>
            </div>
            <div class="row top">
                <ul id="ii" class="list-unstyled">
                <!--b_image.php 动态生成-->
                       <li class="col-sm-4 col-xs-6 col-md-4" v-for="(item,i) in resu.data">
                            <div><img :src="require('../assets/'+item.imagepath)" class="img-responsive" 
                            style="border-radius:5px"></div>
                            <b>{{item.title}}</b>
                            <span>{{item.text}}</span><br>
                            <a href="#">+下载模板</a>
                        </li>                      
                </ul>
            </div>
            <div class="row" id="f2-size">
                <span class="col-sm-3 col-xs-12" id="h3">最新文章</span> 
            </div>
            <div class="row bottom">
                <ul id="i2" class="list-unstyled">
                <!-- article_list.php 动态生成-->
                   <li class="col-xs-12" v-for='li in pager.data'>
                        <h3><a href="#">{{li.title}}</a></h3>
                        <div class="row">
                            <a href="#" id="aa"><img :src="require('../assets/'+li.pic)" class="col-sm-4 col-xs-12"></a>
                            <p class="col-sm-8 col-xs-12">{{li.text}}</p>
                        </div>
                        <div class="row" id="ff1">
                            <a href="#" class="glyphicon glyphicon-tag col-sm-2 col-xs-4">网站建设</a>
                            <span class="glyphicon glyphicon-time col-sm-2 col-xs-4">{{li.jointime}}</span>
                            <span class="glyphicon glyphicon-eye-open col-sm-2 hidden-xs">浏览(<a href="#">188</a>)</span>
                            <span class="glyphicon glyphicon-heart col-sm-2 col-xs-4" id="btn">喜欢(26)</span>
                            <a href="#" class="col-sm-2 hidden-xs">阅读原文&gt;&gt;</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="row">
                <!-- 分页 -->                   
                    <ul class="list-unstyled col-md-9 col-xs-12 pagination" style="padding-left:213px" id="pagination">
                    <!-- 动态生成-->
                        <li class="disabled"><a href="#">共{{pager.pageCount}}页</a></li>	
                        <li><a href="#" @click.prevent="loadBlog(pager.pno-1)">上一页</a></li>
                        <li v-if="pager.pno-2>0"><a href="#" @click.prevent="loadBlog(pager.pno-2)">{{pager.pno-2}}</a></li>
                        <li v-if="pager.pno-1>0"><a href="#" @click.prevent="loadBlog(pager.pno-1)">{{pager.pno-1}}</a></li>
                        <li class="active"><a href="#">{{pager.pno}}</a></li>
                        <li v-if="pager.pno+1<=pager.pageCount"><a href="#" @click.prevent="loadBlog(pager.pno+1)>{{pager.pno+1}}</a></li>
                        <li v-if="pager.pno+2<=pager.pageCount"><a href="#" @click.prevent="loadBlog(pager.pno+2)>{{pager.pno+2}}</a></li>
                        <li v-if="pager.pno!=pager.pageCount"><a href="#" @click.prevent="loadBlog(pager.pno+1)">下一页</a></li>
                    </ul>
            </div>
            </div>
            <div class="col-md-3 hidden-sm right">
            <div class="row">
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
                    <li class="col-sm-12 hidden-xs">
                        <form action="#" class="form-inline">
                        <div class="form-group">
                            <label for="kk" class="sr-only">搜索</label>
                            <input type="text" id="kk" class="form-control" placeholder="请输入搜索的标题" list="list1">
                            <datalist id="list1">
                                <option>搜索</option>
                                <option>标题</option>
                                <option>全部</option>
                            </datalist>
                        </div>
                        <div class="form-group">
                        <a href="javascript:;" class="btn btn-success" data-trigger="search">搜索</a>
                        </div>
                        </form>
                    </li>
                    <h2 class="col-sm-12 col-sm-offset-3 hidden-xs">点击排行</h2>
                    <li class="col-sm-12 hidden-xs" id="right-top" v-for='list in article.data.slice(0,6)'>
                    <!--右侧栏 点击排行-->        
                            <a class="col-sm-12">{{list.title}}</a>
                            <a href="#" class="col-sm-6 sp">
                                <img :src="require('../assets/'+list.pic)" class="img-responsive">
                            </a>	
                            <p class="col-sm-6">{{list.text}}</p>

                          
                    </li>
                    <h2 class="col-sm-12 col-sm-offset-3 hidden-xs"">站长推荐</h2>
                    <li class="col-sm-12 hidden-xs" id="right-bottom" v-for='list in article.data.slice(6,13)'>
                    <!--右侧栏，站长推荐-->
                        <a class="col-sm-12">{{list.title}}</a>
                        <a href="#" class="col-sm-6 sp">
                            <img :src="require('../assets/'+list.pic)" class="img-responsive">
                        </a>	
                        <p class="col-sm-6">{{list.text}}</p>
                    </li>
                    <li class="col-sm-12 hidden-xs" id="pic">
                        <span>联系方式</span>
                    <img src="../assets/img/index/person.jpg">
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </section>
    <!-- 楼层点亮 -->
    <ul id="fixedtool">
        <li class="active" id="li1"><a href="#h2" id="c1">个人<br>博客</a></li>
        <li id="li2"><a href="#h3" id="c2">最新<br>文章</a></li>
        <li id="li3"><a href="#h1" id="click">回到<br>顶部</a></li>  
    </ul>
 </div>   
</template>
<script>
     import axios from 'axios';
     import '../assets/js/jquery.js'
     import '../assets/js/bootstrap.js'
     import '../assets/css/bootstrap.css'
    export default{
        data(){
            return {
                result:{},
                resu:{},
                pager:{},
                pageSize:13,
                article:{}
            }
        },
        //http://127.0.0.1/myproject1_show/blog_user/blog/data/article_list.php?pno=1&&pageSize=10
        components: {},
        methods: {
           loadBlog(pno){
            var url=`http://127.0.0.1/myproject1_show/blog_user/blog/data/article_list.php?pno=${pno}&pageSize=${this.pageSize}`;
            axios.get(url).then((val)=>{
                console.log(val.data);
                this.pager=val.data;
            }).catch((err)=>{
                console.log(err);
            })
            }
        },
        computed: {},
        watch: {
             pageSize(){
                this.loadBlog(1);
            }
        },
        mounted(){
           this.loadBlog(1);
           var url=`http://127.0.0.1/myproject1_show/blog_user/blog/data/images.php`;
            axios.get(url).then((res)=>{
                // console.log(res.data.data[0].image);
                 this.result=res.data.data;
            }).catch((err)=>{
                console.log(err);
            })
            var uri=`http://127.0.0.1/myproject1_show/blog_user/blog/data/b_image.php`;
            axios.get(uri).then((res)=>{
                console.log(res.data.data);
                this.resu=res.data;
            }).catch((err)=>{
                console.log(err);
            })
            var src=`http://127.0.0.1/myproject1_show/blog_user/blog/data/r-article.php`;
            axios.get(src).then((res)=>{
                console.log(res.data);
                this.article=res.data;
            }).catch((err)=>{
                console.log(err);
            })
            // 顶部导航固定
             $(window).scroll(function(){
                var t=$(document).scrollTop();
                if(t>100){
                    $("header").addClass("fix");
                }else{$("header").removeClass("fix")}
            })
             //侧导航显示隐藏
                var $show=$("#fixedtool");
                var $dil=$("#f1-size");
                $(window).scroll(function(){
                if($dil.offsetTop<$(window).scrollTop()+innerHeight/4){
                $show.show();
                }else $show.hide();
                })
                	//顶部滑动
                    $("#click").click(function(){
                    $("html,body").animate({scrollTop:
                        ($($(this).attr('href')).offsetTop -1000)},1000)
                        })
                    $("#c1").click(function(){
                    $("html,body").animate({scrollTop:
                        ($($(this).attr('href')).offsetTop -20)},1000)
                    })   
                    $("#c2").click(function(){
                    $("html,body").animate({scrollTop:
                        ($($(this).attr('href')).offsetTop -20)},1000)
                    })
                //   楼层点亮
                    var $floor1=$("#li1");
                    var $floor2=$("#li2");
                    var $fl1=$("#f1-size");
                    var $fl2=$("#f2-size");
                    var $footer=$("#ft");
                    var $floor3=$("#li3");
                    $(window).scroll(function(){
                    if($fl1.offsetTop<$(window).scrollTop()+innerHeight/4){
                        $floor1.css({background:"black"}).siblings().css({
                        background:"red"});
                    } 
                    })
                    $(window).scroll(function(){
                    if($fl2.offsetTop<$(window).scrollTop()+innerHeight/2){
                        $floor2.css({background:"black"}).siblings().css({
                        background:"red" });	
                    } 
                    })
                    $(window).scroll(function(){
                    if($footer.offsetTop<$(window).scrollTop()+innerHeight){
                        $floor3.css({background:"black"}).siblings().css({
                        background:"red" });	
                    } 
                })
        }
    }
</script>
<style>
    body{
        background:#F1F1F1;
        box-sizing: border-box;
    }
    ul,li{
    list-style:none; 
    }
    ul#fixedtool{
    position:fixed;
    left: 0;
    top:30%;
    display:none;
    }
    ul#fixedtool>li {
        height: 50px;
        line-height: 20px;
        list-style: none;
        width: 40px;
        border-bottom:1px solid white;
        text-align: center;
        background:red;
        cursor: pointer;
    }
    ul#fixedtool a {
        color: #ffffff;
        text-decoration: none;
    }
    a{
    text-decoration:none;
    }
    header{
    width:100%;
    z-index:1000;
    }
    header a:hover{
    color:red;
    }
    .fix{
    position:fixed;
    top:0;
    }
    #nnv>a:first-child{
    font-size:30px;
    font-family:"SimHei";
    }
    #nnv>a:nth-child(3){
    font-size:14px;
    }
    #nnv>a:nth-child(3):hover{
    color:orange;
    }
    section>#ro>div{
    overflow:hidden;
    }
    section>#ro>div img{
    cursor:pointer;
    border-radius:5px;
    transition:all .5s linear;
    }
    section>#ro>div img:hover{
    transform:scale(1.2);
    }
    .top,.bottom{
    background:white;
    border-radius:10px;
    }
    #f1-size,#f2-size{
    border-bottom:2px solid black;
    height:50px;
    }
    #f1-size>span,#f2-size>span{
    display:block;
    line-height:50px;
    font-size:18px;
    font-weight:bold;
    }
    #f1-size>a{
    display:block;
    line-height:50px;
    }
    #ii{
    margin-top:20px;
    }
    #ii li{
    margin:15px 0;	 
        transition:all .5s linear;
        overflow:hidden;
    }
    b{
        display:block;
        margin:10px 0;
        height:30px;
        line-height:30px;
    }
    #ii>li div{
        height:100px;
        overflow:hidden;
        border-radius:5px;	
    }
    #ii>li img{
        transition:all .5s linear;
        cursor:pointer;
    }
    #ii>li img:hover{
        transform:scale(1.2);
    }
    #i2>li{
    border-bottom:1px solid #CCCCCC;
    }
    #i2>li:first-child>h3>a,#i2>li:nth-child(2)>h3>a,
    #i2>li:nth-child(3)>h3>a,#i2>li:nth-child(4)>h3>a
    ,#i2>li:nth-child(5)>h3>a,#i2>li:nth-child(6)>h3>a
    ,#i2>li:nth-child(7)>h3>a,#i2>li:nth-child(8)>h3>a
    ,#i2>li:nth-child(9)>h3>a,#i2>li:nth-child(10)>h3>a
    ,#i2>li:nth-child(11)>h3>a,#i2>li:nth-child(12)>h3>a
    ,#i2>li:nth-child(13)>h3>a{
        font-size:18px;
        font-weight:bold;
        color:gray;
    }
    #i2>li:first-child>h3>a:hover,#i2>li:nth-child(2)>h3>a:hover,
    #i2>li:nth-child(3)>h3>a:hover,#i2>li:nth-child(4)>h3>a:hover
    ,#i2>li:nth-child(5)>h3>a:hover,#i2>li:nth-child(6)>h3>a:hover
    ,#i2>li:nth-child(7)>h3>a:hover,#i2>li:nth-child(8)>h3>a:hover
    ,#i2>li:nth-child(9)>h3>a:hover,#i2>li:nth-child(10)>h3>a:hover
    ,#i2>li:nth-child(11)>h3>a:hover,#i2>li:nth-child(12)>h3>a:hover
    ,#i2>li:nth-child(13)>h3>a:hover{
        color:black;
        text-decoration:none;
    }
    #aa>img{
    width:225px;
    height:80px;
    /*overflow:hidden;*/
    }
    #ff1{
        height:40px;
    }
    #ff1>a{
        margin:0 10px;
        font-size:10px;
        display:inline-block;
        height:40px;
        line-height:40px;
    }
    .right>div>ul>li{
    background:white;
    border-radius:5px;
    margin:10px 5px;
    }
    .right>div>ul>li:first-child{
    margin-top:48px;
    border-top:2px solid black;
    }
    .right>div>ul>li:first-child p{
    margin:10px 0;
    height:30px;
    background:#F1F1F1;
    line-height:30px;
    border-radius:5px;
    }
    .right>div>ul>li:nth-child(2){
    height:80px;
    line-height:80px; 
    }
    .right>div>ul>li:nth-child(3)>a:nth-child(n),
    .right>div>ul>li:nth-child(4)>a:nth-child(n){
    color:black;
    font-weight:bold;
    }
    .right>div>ul>li:nth-child(3)>p,.right>div>ul>li:nth-child(4)>p{
    color:#888888;
    }
    #pic>span{
    display:inline-block;
    font-size:25px;
    width:100%;
    text-align:center;
    }
    #pic{
    text-align:center;
    }
    #pic>img{
    width:70%;
    text-align:center;
    }
    .sp{
    display:inline-block;
    width:105px;
    height:80px;
    overflow:hidden;
    }
    .sp>img:hover{
    transform:scale(1.2);
    transition:all .5s linear;
    }
    footer{
    width:100%;
    height:60px;
    background:black;
    }
    footer>p{
    text-align:center;
    height:60px;
    line-height:60px;
    color:white;
    font-size:20px;
    }
</style>
