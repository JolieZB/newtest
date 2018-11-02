<template>
    <div>
    <h2 style="text-align:center">模拟小时钟</h2>
     <div id="clock">
		  <div id="minute"></div>
		  <div id="second"></div>
		</div>
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
        }
  }
</script>
<style>
    #clock{
		   width:400px;
			height:400px;
			border:6px solid blue;
			border-radius:50%;
			position:relative;
			margin:0 auto;
		}
		/*分针*/
		#minute{
		  width:10px;
			height:100px;
			background:purple;
			position:absolute;
			top:100px;
			left:195px;
			transform-origin:center bottom;
			animation:turn 3600s linear infinite;
		}
		/*秒针*/
		#second{
		  width:6px;
			height:150px;
			background:red;
			position:absolute;
			top:50px;
			left:197px;
			transform-origin:center bottom;
			animation:turn 60s linear infinite;
		}
		/*声明动画*/
		@keyframes turn{
		  0%{
			  transform:rotate(0deg);
			}
			100%{
			  transform:rotate(360deg);
			}
		}
  
</style>