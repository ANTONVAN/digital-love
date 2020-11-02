var buttonFirstVideo = $("#btn-1");
var buttonSecondVideo = $("#btn-2");
var buttonThirdVideo = $("#btn-3");
var firstVideo = $("#video-1");
var secondVideo = $("#video-2");
var thirdVideo = $("#video-3");

firstVideo.hide();
secondVideo.hide();
thirdVideo.hide();


buttonFirstVideo.on("click",function(){
	
	if(firstVideo.attr("state")==="play"){
		firstVideo.hide();
		firstVideo.trigger("pause");
		firstVideo.attr("state","paused");
	}else{
		firstVideo.show();
		firstVideo.trigger("play");	
		firstVideo.attr("state","play");
	}
});

buttonSecondVideo.on("click",function(){
	secondVideo.show();
	if(secondVideo.attr("state")==="play"){
		secondVideo.hide();
		secondVideo.trigger("pause");
		secondVideo.attr("state","paused");
	}else{
		secondVideo.show();
		secondVideo.trigger("play");	
		secondVideo.attr("state","play");
	}
});

buttonThirdVideo.on("click",function(){
	
	if(thirdVideo.attr("state")==="play"){
		thirdVideo.hide();
		thirdVideo.trigger("pause");
		thirdVideo.attr("state","paused");
	}else{
		thirdVideo.show();
		thirdVideo.trigger("play");	
		thirdVideo.attr("state","play");
	}
});

firstVideo.on("ended",function(){
	firstVideo.hide();
});

secondVideo.on("ended",function(){
	secondVideo.hide();
})

thirdVideo.on("ended",function(){
	thirdVideo.hide();
});
