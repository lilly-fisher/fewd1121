
$(document).ready(function(){


	$('.box').hover(function(){
		$('.box').css('background-color', 'blue');
	});

	console.log('this is working');

	$('.box').click(function(){
		$('.box').text('im different!');
	});

	$('.box').click(function(){
		$('.box:first-child').css('height', '500px');
	});
});