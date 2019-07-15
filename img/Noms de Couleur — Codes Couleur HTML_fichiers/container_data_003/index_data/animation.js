var tt = TweenMax.to, tf = TweenMax.from, tft = TweenMax.fromTo,td = TweenMax.delayedCall, ts = TweenMax.set, tweenDelay = .5;



init = function(){
	build_timeline_main();
	addListeners();
	
	
	
}
function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}

function build_timeline_main() {	
	function bg2In() {
		var bg2TL = new TimelineMax();
			bg2TL.fromTo(scrub_bar, 10, {scaleX:.25}, {scaleX:.9, transformOrigin:"28px 100%", ease:Power0.easeNone},"start")		
		return bg2TL;		
		//bg2TL.timeScale( 0.8);
	}	
	function bg1In() {
		var bg1TL = new TimelineMax();
			bg1TL
				.set("#img_arm2", {rotation:-110, transformOrigin:"82px 150px"}, "start")
		
				.to("#img_tv_strip", .5,{repeat:10, x:-201, ease:SteppedEase.config(3)}, "start")
				
				.to("#img_arm1", .5,{rotation:-5, transformOrigin:"78px 153px", ease:Power3.easeOut}, "start")
				
				.to("#img_arm1", .2,{rotation:95, transformOrigin:"78px 153px", ease:Power3.easeInOut}, "start+=.5")
				.to("#img_arm2", .2,{rotation:0, transformOrigin:"82px 150px", ease:Power3.easeInOut}, "start+=.5")
				.from("#img_head", .5,{rotation:5, transformOrigin:"80px 146px", ease:Power3.easeOut}, "start+=.5")

				.from("#img_arm2", .001,{autoAlpha:0, ease:Power3.easeInOut}, "start+=.65")
				.to("#img_arm1", .001,{autoAlpha:0, ease:Power3.easeInOut}, "start+=.651")
		
				.to("#img_tv_strip", .01,{autoAlpha:0}, "start+=.7")
		return bg1TL;
		
		bg1TL.timeScale( 0.8);
	}	
	
	//Show Ad
	ts("#container_dc", {display:"block"});
	var mainTL = new TimelineMax();
		mainTL.to(bgFade, .25, {autoAlpha:0, ease:Power1.easeInOut, overwrite:"none", onComplete:hideBGFade},"fr0")
		
		//.addPause()
		.add("fr1", "+=0")
		.staggerFromTo("#copy1 .text1", .01, {autoAlpha:0},{autoAlpha:1, ease:"Power3.easeOut"},.75,"fr1+=.2")	
			
		.add("fr1_out", "+=1.5")
		.from("#anim_container", .01, {autoAlpha:0, ease:"Power3.easeOut"},"fr1_out" )
		.to("#copy1", .01, {autoAlpha:0, ease:"Power3.easeOut"},"fr1_out+=.25" )
		.add(bg1In,"fr1_out+=0")
		.add(bg2In,"fr1_out-=.1")
		
		//.addPause()		
		.add("fr2", "+=1.25")
		.to("#anim_container", .01, {autoAlpha:0, ease:"Power3.easeInOut"},"fr2" )
		.staggerFromTo("#copy2 .text1", .01, {autoAlpha:0},{autoAlpha:1, ease:"Power3.easeOut"},1.2,"fr2+=.3")
		
		.add("fr3", "+=2.25")
		
		.to("#copy2", .01, {autoAlpha:0,ease:"Power3.easeOut"},"fr3" )
		.staggerFromTo("#copy3 .text1", .5, {autoAlpha:0, x:-20},{autoAlpha:1, x:0,  ease:"Power3.easeOut"},.07,"fr3+=.3" )
		.staggerFromTo("#copy3 .text2", .5, {autoAlpha:0, x:-20},{autoAlpha:1, x:0, ease:"Power3.easeOut"},.07,"+=.25" )
		.add("ef")
		.call(function(){console.log(mainTL.duration());});
		//mainTL.seek("fr1_out")		
}



hideBGFade = function(){
	bgFade.style.display = "none";
}


//Add Event Listeners
setRoll = function(){
	var x = document.getElementById("background_exit_dc");
	if (x.addEventListener) {                    
		// For all major browsers, except IE 8 and earlier
	    x.addEventListener('mouseover', bgOverHandler, false);
	    x.addEventListener('mouseout', bgOutHandler, false);
	} else {                  
		// For IE 8 and earlier versions hide rollover effect
	}
}
addListeners = function() {
	setRoll();
}


bgOverHandler = function(e) {
	ts(cta, {autoAlpha:.7, overwrite:"true"});			
}

bgOutHandler = function(e) {
	ts(cta, {autoAlpha:1, overwrite:"true"});			
}


function bgExitHandler() {

}


