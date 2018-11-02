<template>
    <div>
      <h2 style="text-align:center">动画</h2>
     <div id="d1"></div>
    </div>
</template>
<style>
     /*声明动画*/
		 @keyframes change{
		   0%{
			   background:yellow;
				 border-radius:0%;
			 }
			 25%{
			   background:pink;
				 border-radius:50%;
			 }
			 50%{
			   background:purple;
				 border-radius:0%;
			 }
			 75%{
			   background:blue;
				 border-radius:50%;
			 }
			 100%{
			   background:green;
				 border-radius:0%;
			 }
		 }

   #d1{
	    width:200px;
	 	height:200px;
		border:2px solid blue;
		animation:change 5s linear 1s 3;
		animation-fill-mode:both;
		margin:0 auto;
	 }
	 #d1:hover{
	 /*暂停*/
	  animation-play-state:paused;

/*	 /*调用动画*/
/*	  animation-name:change;*/
/*	 /*动画执行时间*/
/*		animation-duration:5s;*/
/*		/*时间曲线函数*/
/*		animation-timing-function:linear;*/
/*		/*延迟时间*/
/*		animation-delay:1s;*/
/*		/*动画执行次数*/
/*		animation-iteration-count:2;*/
/*		/*播放方向*/
/*		animation-direction:alternate;*/
/*		*/
     
	 }
</style>