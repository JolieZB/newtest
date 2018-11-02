<template>
  <div>
    <header class="navbar navbar-default" id="header">
        <div class="container">
            <div class="navbar-header" id="nnv">
                <a href="#" class="navbar-brand">星期八的博客</a>
                <a href="#" class="navbar-brand"><img src="../assets/img/header/logo.png" width="30px"></a>
                <a href="#" class="navbar-brand">富贵不能淫，威武不能屈，贫贱不能移</a>
                <a href="#menu" data-toggle="collapse" class="navbar-toggle">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </a>
            </div>
            <div class="collapse navbar-collapse" id="menu">
                <ul class="nav navbar-nav navbar-right" id="nav-bar">
                    <li><router-link to='/index'>首页</router-link></li>
                    <li><a href="#">简介</a></li>
                    <li><router-link to='/jses' target="_blank">探讨</router-link></li>
                    <li><a href="#">感悟</a></li>
                    <li><a href="#">寄语</a></li>
                    <li><router-link to='/message'>信箱</router-link></li>
                    <li><a href="#">投稿</a></li>
                </ul>

            </div>	
        </div>
    </header>
    <router-view></router-view>
    <footer class="col-xs-12" id="ft">
        <p>Design by PKP个人博客 豫ICP备888888号-8</p>
    </footer>
   </div>  	
</template>
<script>
    export default{
        data(){
            return {}
        },
        components: {},
        methods: {},
        computed: {},
        watch: {},
        mounted(){
            // require("../assets/js/app.js");
        },
        created(){
            
        }
    }
</script>