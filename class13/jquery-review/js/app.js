
$(document).ready(function(){


	$('.box').hover(function(){
		$('.box').css('background-color', 'blue');
	});

	console.log('this is working');

	$('.box').click(function(){
		$('.box').text('im different!');
	});

	$('.box').click(function(){
		$('section:nth-child(2)').css('height', '500px');
	});

	$('.box').click(function(){
		$(this).hide();
	});
	$('button').click(function(){
		$('.box').slideToggle('slow');
	});
});