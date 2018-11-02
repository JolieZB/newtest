<template>
 <div>
     {{text}}
     <div class="row one">
                                    <div class="col-xs-2">
                                        <img src="../assets/img/message/22.jpg"class="img-circle"> 
                                    </div>
                                    <div class="col-md-10" style="height:30px">
                                        <span><a href="#" style="color:red">张**</a></span>
                                        <span>[河南省平顶山市网友]</span>
                                        <span>2018年9月8日</span>
                                    </div>
                                    <div class="col-md-10"><span>学到很多关于前端的小技巧,非常感谢</span></div>
                                    <div class="col-md-3 col-md-offset-9 col-xs-12">
                                        <span id="fadeIn" @click='fadeIn'>回复      
                                        </span>
                                        <span class="ding-active"></span>
                                        <a href="#" class="cou">0</a>
                                        <span class="prop-ico" id="prop-ico"></span>
                                        </div>
                                        <div class="col-sm-12" id="apply">
                                            <div class="col-xs-12"id="show-hide"> 
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
   <div class="row one">
                                    <div class="col-xs-2">
                                        <img src="../assets/img/message/22.jpg"class="img-circle"> 
                                    </div>
                                    <div class="col-md-10" style="height:30px">
                                        <span><a href="#" style="color:red">张**</a></span>
                                        <span>[河南省平顶山市网友]</span>
                                        <span>2018年9月8日</span>
                                    </div>
                                    <div class="col-md-10"><span>学到很多关于前端的小技巧,非常感谢</span></div>
                                    <div class="col-md-3 col-md-offset-9 col-xs-12">
                                        <span id="fadeIn" @click='fadeIn'>回复      
                                        </span>
                                        <span class="ding-active"></span>
                                        <a href="#" class="cou">0</a>
                                        <span class="prop-ico" id="prop-ico"></span>
                                        </div>
                                        <div class="col-sm-12" id="apply">
                                            <div class="col-xs-12"id="show-hide"> 
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
</template>
<script>
    export default{
        data(){
            return {}
        },
        props:['text','list'],
        components: {},
        methods: {
             fadeIn(){
                $("#apply").toggle({display:"block"});
            }
        },
        computed: {},
        watch: {},
        mounted(){}
    }
</script>