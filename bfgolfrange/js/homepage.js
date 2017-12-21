$(window).scroll(function(){
  var threshold = 200; // number of pixels before bottom of page that you want to start fading
  var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
	if( op <= 0 ){
		$("#pic").hide();
	} else {
		$("#pic").show();
	}
	$("#pic").css("opacity", op );
});
