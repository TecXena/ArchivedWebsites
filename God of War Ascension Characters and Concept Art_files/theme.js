jQuery(document).ready(function($){

if(typeof themeSettings =='undefined')
	themeSettings = {};

/*= Misc
 *=================================*/

/*== HTML5 placeholder fallback */
$('input[type="text"]').each(function(){
	var placeholder = $(this).attr('placeholder');
		
	$(this).bind('focus', function(){
		if($(this).attr('value') == '')
			$(this).attr('value', '').attr('placeholder', '');
	}).bind('blur', function(){
		if($(this).attr('value') == '')
			$(this).attr('placeholder', placeholder);
	});
});

/* Resize Slide */
$(window).bind('load resize', function(){
	jQuery('.slide').each(function(){
		jQuery(this).width(jQuery(this).parents('.slider').width());
		jQuery(this).parents('.slides').height(jQuery(this).height());
	});
});

// Create repeat method if it is not exists
if (!String.repeat) {
	String.prototype.repeat = function(l) {
		return new Array(l + 1).join(this);
	}
}

/*= Responsive Navigation Menu */
$('#main-nav .menu').deSelectMenu({});

/*= Loop View Switcher
 *=================================*/
$('.loop-actions .view a').click(function(e) {
	e.preventDefault();
		
	var viewType = $(this).attr('data-type'),
		loop = $('.switchable-view'),
		loopView = loop.attr('data-view');
			
	if(viewType == loopView)
		return false;
			
	$(this).addClass('current').siblings('a').removeClass('current');

	loop.stop().fadeOut(100, function(){
		if(loopView)
			loop.removeClass(loopView);
			
		$(this).fadeIn().attr('data-view', viewType).addClass(viewType);
	})

	$.cookie('loop_view', viewType, { path: '/', expires : 999});

	return false;
});

// Change event on select element
$('.orderby-select').change(function() {
	location.href = this.options[this.selectedIndex].value;
});

/*= "More/less" Toggle
 *=================================*/
if(themeSettings.infoToggle) {
	var infoToggle = function(){
		var $this = this;
	
		var info = $('#info'),
			trueHeight = info.height(), 
			lessHeight = themeSettings.infoToggle,
			arrow = $('.info-arrow'),
			more = $('.info-more'),
			less = $('.info-less');

		if((trueHeight-lessHeight) > 50) {
			info.height(lessHeight);
			more.css('display', 'inline-block');
			arrow.css('display', 'inline-block');
		}
	
		$('.info-more').click(function(){
			$this.infoMore();
			return false;
		});
	
		$('.info-less').click(function(){
			$this.infoLess();
			return false;
		});
	
		$('.info-arrow').click(function(){
			if($(this).hasClass('info-arrow-more'))
				$this.infoMore();
			else
				$this.infoLess();
			
			return false;
		});	
	
		this.infoMore = function(){
			arrow.removeClass('info-arrow-more').addClass('info-arrow-less');
			more.hide();
			less.css('display', 'inline-block');
			info.stop().animate({'height':trueHeight}, 300);
		}
		
		this.infoLess = function(){
			arrow.removeClass('info-arrow-less').addClass('info-arrow-more');
			less.hide();
			more.css('display', 'inline-block');
			info.stop().animate({'height':lessHeight}, 300);
		}
	}
	var infoToggle = new infoToggle();
}

/*= Slides */
if(jQuery().slides) {
	$('.home-featured').slides({
		// play:2500,
		pause: 2500,
		hoverPause: true,
		generatePagination: false,
		paginationClass: 'slider-pagination',
		next: 'next-slide',
		prev: 'prev-slide',
		crossFade: true
	});
}

/*= Masonry */
if(jQuery().masonry) {
	$('#sidebar img').imagesLoaded(function(){
		$('#sidebar').masonry({gutterWidth:20});
	});
}
	
/*= Carousel
 *=================================*/	
if(jQuery().jcarousel) {
	// Featured Carousel - Horizontal 
	$(window).bind('load resize', function(){
		$('.fcarousel-6').deCarousel();
		$('.fcarousel-5').deCarousel();
	});
	
		
	// Featured Carousel - Vertical 
	$('.home-featured .carousel-clip').jcarousel({
		vertical: true,
		wrap: 'circular'
	});
	$('.home-featured .carousel-prev').jcarouselControl({target: '-=4'});
	$('.home-featured .carousel-next').jcarouselControl({target: '+=4'});
}

/*= Ajax
 *=================================*/	

	/*== Ajax video for Featured Content with standard layout on Home Page */
	$('.home-featured .slider .item-video .thumb a').live('click', function(e){
		e.preventDefault();
		
		var el = $(this), 
			pid = el.attr('data-id'), 
			thumb = el.parents('.thumb'),
			caption = el.parents('.slide').find('.caption')
			slides = el.parents('.slides'); 
		
		// Prevent duplicate clicks
		if(el.attr('data-clickable') == 'no') 
			return false;
		$('.slides .thumb a').attr('data-clickable', '');
		el.attr('data-clickable', 'no');
		
		$('.slides .screen').remove();
		$('.slides .caption').show();
		$('.slides .thumb').show().removeClass('loading');
		caption.hide();
		thumb.addClass('loading');
			
		$.ajax({
			url: ajaxurl,
			type: 'POST',
			data: {action:'ajax-inline-video', 'id':pid},
			dataType: 'html',
			error: function(){
				alert(ajaxerror);
				thumb.removeClass('loading');
				el.attr('data-clickable', '');
			},
			success: function(r){
				thumb.before('<div class="screen"></div>');
				var screen = thumb.prev('.screen');
				screen.hide().html(r);
					
				if(screen.find('iframe').length > 0) {
					screen.find('iframe').load(function(){
						screen.show();
						thumb.hide().removeClass('loading');
						el.attr('data-clickable', '');
					});
				} else {
					screen.show();
					thumb.hide().removeClass('loading');
					el.attr('data-clickable', '');
				}
				
				/* Eval Scripts
				var dom = $(r);
				dom.filter('script').each(function(){
					$.globalEval(this.text || this.textContent || this.innerHTML || '');
				});*/
			}
		});
		
		return false;
	});
	
	// Remove playing video screen
	$('.home-featured .slider-pagination a').bind('click', function(e){
		e.preventDefault();
			
		$('.home-featured .slider .screen').remove();
		$('.home-featured .slider .thumb').show();
		$('.home-featured .slider .caption').show();
	});
	
	/*== Ajax video for Featured Content with Full Width layout on Home Page */
	$('.home-featured-full .carousel .item-video a').live('click', function(e){
		e.preventDefault();  
		
		var el = $(this), pid = el.attr('data-id'), video = $('#video');
			
		$.ajax({
			url: ajaxurl,
			type: 'POST',
			data: {action:'ajax-video', 'id':pid},
			dataType: 'html',
			error: function(){
				alert(ajaxerror);
			},
			success: function(r){
				video.html(r);

				// Re-initialize AddThis
				addthis.toolbox('.addthis_toolbox');
				addthis.counter(".addthis_counter");
				
				/* Eval Scripts
				var dom = $(r);
				dom.filter('script').each(function(){
					$.globalEval(this.text || this.textContent || this.innerHTML || '');
				});*/

				el.parents('li').addClass('current').siblings().removeClass('current');
			}
		});
		
		return false;
	});

	/*== Ajax video for 'List Large' view */
if(themeSettings.ajaxVideoForListLargeView) {
	$('.list-large .item-video .thumb a').live('click', function(e){
		e.preventDefault();
		
		var el = $(this), pid = el.attr('data-id'), thumb = el.parents('.thumb');
		
		// Prevent duplicate clicks
		if(el.attr('data-clickable') == 'no') 
			return false;
		$('.list-large .thumb a').attr('data-clickable', '');
		el.attr('data-clickable', 'no');
		
		$('.list-large .screen').remove();
		$('.list-large .thumb').show().removeClass('loading');
		thumb.addClass('loading');
			
		$.ajax({
			url: ajaxurl,
			type: 'POST',
			data: {action:'ajax-inline-video', 'id':pid},
			dataType: 'html',
			error: function(){
				alert(ajaxerror);
				thumb.removeClass('loading');
				el.attr('data-clickable', '');
			},
			success: function(r){
				thumb.before('<div class="screen"></div>');
				var screen = thumb.prev('.screen');
				screen.hide().html(r);
					
				if(screen.find('iframe').length > 0) {
					screen.find('iframe').load(function(){
						screen.show();
						thumb.hide().removeClass('loading');
						el.attr('data-clickable', '');
					});
				} else {
					screen.show();
					thumb.hide().removeClass('loading');
					el.attr('data-clickable', '');
				}
				
				/* Eval Scripts
				var dom = $(r);
				dom.filter('script').each(function(){
					$.globalEval(this.text || this.textContent || this.innerHTML || '');
				});*/
			}
		});
		
		return false;
	});
}

});