function getInit(){
var gif="img/r.gif";
var png="img/stick_stand.png";
index();
var text=0;
var num=0;
//  getUrl();
//  function getUrl(){
//      var str=location.href;
//      var strq=str.substring(str.lastIndexOf("?"));
//      var strArry=strq.split("&");
//      var s1=strArry[0].substring(strArry[0].lastIndexOf("=")+1);
//      gif=s1;
//      var s2=strArry[1].substring(strArry[0].lastIndexOf("=")+1);
//      png=s2;
//  }
    getWell(2);
    function getWell(num){
        $(".well-box").html("");
        var lRan=0;
        for(var i=0;i<num;i++){
            var wRan=parseInt(Math.random()*(120+1-$(".man").width())+$(".man").width());
            var wellObj=$('<div class="well" style="width:'+wRan+'px;left:'+lRan+'px;"></div>');
            lRan+=parseInt(Math.random()*($(".container").offset().top))+wRan;
            $(".well-box").append(wellObj);
        }
    }
    getBgRandom();//引入背景图片的变换
    var transStick=true; //棍子的变化
    $(".btnClick").mousedown(function(){
			$(this).addClass("btnDown");
			if(transStick){	
			var mW=$(".container").offset().top;  //顶部最高的高度
			$(".stick").animate({"width":mW+"px"},1000) //棍子的变化效果
			}
			
		}).mouseup(function(){
			$(this).removeClass("btnDown");  //先移除btnDown节点
			$(".stick").addClass("stickDown").stop();  //添加绳子落下的节点 
			transStick=false;
			setTimeout(manRun,350);  //人开始跑 用了350毫秒
			
		});
    init(0);
    function init(num){
        $(".man img").attr("src",png);
        $(".man").css("left",($(".well").eq(num).width()-50+parseFloat($(".well").eq(num).css("left")))+"px");
        $(".stick").removeClass("stickDown").width(0).css("left",(parseFloat($(".man").css("left"))+50)+"px");
        transStick=true;
        $(".man img").removeClass("rotate");
    }
    var wellIndex=0;
    var type=false;
    function manRun(){
        $(".man img").attr("src",gif);
        var sw=$(".stick").width();
        $(".man").animate({"left":((parseFloat($(".man").css("left"))+sw))+"px"},1000,function (){
            var well=$(".well").eq(wellIndex);
            var wellW=well.width();
            var nextWellW=well.next().width();
            var wellL=parseFloat(well.css("left"));
            var nextWellL=parseFloat(well.next().css("left"));
            if(sw<nextWellL-(wellL+wellW) || sw>nextWellL-(wellL+wellW)+nextWellW) {
                $(".man img").addClass("rotate");
                setTimeout(failFun,350);
            }else{
                $(".container").animate({"left":"-"+nextWellL+"px"},1000,function (){
                    wellIndex++;
                    init(wellIndex);
                    if(wellIndex==$(".well").length-1){   
                         successFun();
                    }
                });
            }
        });
       
    }
    function successFun(){
     	$(".dialog").css("display","block"); //黑窗体  
     	//激活按钮
//   	alert("成功！"); 	
    }
     	$(".dialog #successPlay").click(continuePlay);
     	$(".dialog .play-agin").click(resetPlay);  
  
    function continuePlay(){
//  	alert(123);
    	text=$(".play-title").text().replace("关卡","");
     	num=parseInt(text)+1;
     	$(".play-title").text("关卡"+num);
     	wellIndex=0;
     	getWell($(".well").length+1);
     	init(0);
     	$(".container").css("left","0px");
		$(".dialog").css("display","none");
    }
    function resetPlay(){
		    wellIndex=0;
		    init(0);  
		    $(".container").css("left","0px"); 
	    	$(".dialog").css("display","none");
    }	
    $(".dialog1 #failPlay").click(endPlay);
     	$(".dialog1 .play-agin").click(rPlay); 
    function failFun(){
    	$(".dialog1").css("display","block"); //黑窗体  
     	//激活按钮
      
//   	alert("失败！"); 	
//  	 $(".dialog p a.#gamefail").click(resetPlay);
//  	 
//	     if(confirm("是否重新游戏")){
//		      wellIndex=0;
//		      init(0);
//		      $(".container").css("left","0px");
//		      $(".dialog").css("display","none");
//	     }else{
//	      	location.href="index.html";
//	     }
//		$(".dialog1").css("display","block"); //黑窗体
     	
//   	$(".dialog .play-agin").click(continuePlay);  //激活按钮
//   	alert("成功！");
	   
    }
    function rPlay(){  
		    wellIndex=0;
		    init(0);  
		    $(".container").css("left","0px"); 
	    	$(".dialog1").css("display","none");  
    }
    function endPlay(){
	      	location.href="index.html";
    }

    
    
    
    
}