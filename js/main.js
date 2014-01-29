$(function(){
		
		$('.billmore').click('on', function(){
			$('.billtoggle').slideDown('slow');

		});
		
		$('.billless').click('on', function(){
			$('.billtoggle').slideUp('slow');

		});
		
		$('.carolmore').click('on', function(){
			$('.caroltoggle').slideDown('slow');

		});
		
		$('.carolless').click('on', function(){
			$('.caroltoggle').slideUp('slow');

		});
		
		$('.bobmore').click('on', function(){
			$('.bobtoggle').slideDown('slow');

		});
		
		$('.bobless').click('on', function(){
			$('.bobtoggle').slideUp('slow');

		});
		
		$('.johnmore').click('on', function(){
			$('.johntoggle').slideDown('slow');

		});
		
		$('.johnless').click('on', function(){
			$('.johntoggle').slideUp('slow');

		});

		$('.janetmore').click('on', function(){
			$('.janettoggle').slideDown('slow');

		});
		
		$('.janetless').click('on', function(){
			$('.janettoggle').slideUp('slow');

		});
});

	$(function () {
		$('nav li ul').hide().removeClass('fallback');
		$('nav li').hover(function () {
			$('ul', this).stop().slideToggle(200);
		});
	});
