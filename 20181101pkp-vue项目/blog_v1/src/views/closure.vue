<template>
    <div>
      <h2>点赞</h2>
      <button id="btnZan">赞(+0)</button>
	  <button id="btnCai">踩(+0)</button>
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
            btnZan.onclick=(function(){
			var n=0;
			return function(){
				n++;
				btnZan.innerHTML="赞(+"+n+")";
			}
		})();	
		btnCai.onclick=(function(){
			var n=0;
			return function(){
				n++;
				btnCai.innerHTML="踩(+"+n+")";
			}
		})();
        }
  }
</script>