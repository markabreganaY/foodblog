$(function(){
	$('.pagination-nav li:first-child').addClass('active');
	$('.pagination-nav a').click(function(){
		$('.pagination-nav li').removeClass('active');
		$(this).parent().addClass('active');
		
		var getSlide = $.trim($(this).text());		
		var slidesWrap = $(this).parents('.slider-wrap');
		var slides = slidesWrap.find('.slide-list');
		var slidePosition = (getSlide*100)-100;
		slidesWrap.find('.slide').removeClass('slide-active');
		slidesWrap.find('.slide:nth-child('+getSlide+')').addClass('slide-active');
		slides.css('margin-left', '-'+slidePosition+'%');
		
		return false;
	});
	
	$('.direction-nav figure a').click(function(){
		var slidesWrap = $(this).parents('.slider-wrap');
		var slides = slidesWrap.find('.slide-list');
		var getPosition = Math.abs(parseInt(slides.css('margin-left'))/1400);
		var pagination = getPosition+1;
		var slidePosition = 0;
		
		var direction = $(this).parent().attr('class');
		switch(direction){
			case 'direction-left':
					pagination = pagination-1;
					slidePosition = (getPosition*100)-100;
				break;
			case 'direction-right':
					pagination = pagination+1;
					slidePosition = (getPosition*100)+100;
				break;
		}	
		
		if(pagination < 4 && pagination > 0){
			slidesWrap.find('.pagination-nav ol li').removeClass('active');
			slidesWrap.find('.pagination-nav ol li:nth-child('+pagination+')').addClass('active');
			slides.css('margin-left', '-'+slidePosition+'%');
		}
	
		return false;
	});
});