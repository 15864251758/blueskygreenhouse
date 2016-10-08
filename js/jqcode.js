$(function () {
jQuery(".rollbox").slide({mainCell:".bd ul",autoPage:true,autoPlay:true,effect:"left",vis:4,scroll:1});
$('.catelist dt').click(function() {
	$(this).toggleClass('active').next('dd').slideToggle()
});
$('.menu li').hover(function() {
	$(this).addClass('on').find('ul:first').show()
}, function() {
	$(this).removeClass('on').find('ul:first').hide()
});
//jQuery(".proroll").slide({mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4,scroll:1});
//jQuery(".croll").slide({mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4,scroll:1});
jQuery("#banner").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,autoPlay:true});
//jQuery(".pshow").slide({ titCell:".mtabt li", mainCell:".mtabcon"});
//jQuery(".ntab").slide({ titCell:".ntabt li", mainCell:".ntabcon"});
//jQuery(".fdtab").slide({ titCell:".fdtabt li", mainCell:".fdtabcon"});
//jQuery(".ptab").slide({ titCell:".ptabt li", mainCell:".ptabcon",trigger:"click"});



$('.new-block3-col button').click(function(){
	$(this).siblings('.top-icon-more').slideToggle(500);
})


// var newTop = $('.new-block2-content').offset().top;
// $(window).scroll(function(){
// 	var scroll=$(this).scrollTop();
// 	if(scroll>newTop){
// 		$('.design1').show();
// });

var newTop=$('.new-block2').offset().top;
$(window).scroll(function(){
	var scroll=$(this).scrollTop();
	if (scroll>0.6*newTop) {
		$('.design1').addClass('animated bounceIn');
	}
	if (scroll>0.8*newTop) {
		$('.design3').addClass('animated bounceIn');
	}
	if (scroll>newTop) {
		$('.design4').addClass('animated bounceIn');
	}
});


setInterval(function(){
	$('.cloud').animate({
		top:'+=20px',
	},2000);
	$('.cloud').animate({
		top:'-=20px',
	},2000);
},1000);




});




















