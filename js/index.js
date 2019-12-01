function getBgRandom(){
	var ran=parseInt(Math.random()*20); //产生随机数
	$("body").removeClass().addClass("bg"+ran); //先移出已经加载的图片 再进行添加
	//设置成功文本数组


}