// JavaScript Document
var pie = {
    run:function(opts){
        if(!opts.id) throw new Error("must be canvas id.");
        var canvas = document.getElementById(opts.id), ctx;
        if(canvas && (ctx = canvas.getContext("2d"))){
        	canvas.style.width = "180px";
            canvas.style.height = "180px";
            canvas.height = 180 * window.devicePixelRatio*4;
            canvas.width = 180 * window.devicePixelRatio*4;
            
            var noop = function(){};
            var before = opts.onBefore || noop;
            var after = opts.onAfter || noop;
            ctx = canvas.getContext("2d");
            before(ctx,canvas.width,canvas.height);
            ctx.fillStyle = opts.color || '#ffffff';
            var step = opts.step || 1;
            var delay = opts.delay || 10;
            var i = 0, rage = 360 * (opts.percent || 0);
            var sRage = -Math.PI * 0.5;
            var djs = function(){
                i = i + step;
                if(i <= rage){
                    ctx.beginPath();
                    ctx.moveTo(canvas.width/2,canvas.height/2);   
                    ctx.arc(canvas.width/2,canvas.height/2, canvas.width/2, sRage, Math.PI * 2 * (i/360)+sRage);
                    //ctx.lineWidth=16 * window.devicePixelRatio;
                    ctx.fill();
                    setTimeout(djs, delay);
                } else {
                    after(ctx);
                }
            	/*ctx.arc(canvas.width/2,canvas.height/2,canvas.width/2-16 * window.devicePixelRatio,0,360,false);
            	ctx.lineWidth=16 * window.devicePixelRatio;
            	ctx.strokeStyle="#faff6d";
            	ctx.stroke();//画空心圆
            	ctx.closePath();
            	ctx.scale(window.devicePixelRatio, window.devicePixelRatio);*/
            };
            djs();
        }
    }
};

function percentTofloat(km){
	if(km.substring(km.length-1,km.length)=="%"){
		km = km.substring(0,km.length-1);
		km = km/100;
	}
	return km;
}