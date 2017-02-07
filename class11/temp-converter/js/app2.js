$(document).ready(function (){
	$('h2').hide();

	$('#convert').click(function(){
		if ($('#select').value === "Celsius"){
			console.log('work');
			$('#temp') = parseFloat($('#temp-input').val()) * 1.8 + 32;
			$('#unit').html('Celsius');
			$('h2').show();
		}else{
			$('#temp') = (parseFloat($('#temp-input').val()) - 32)/1.8;
			$('#unit').html('Farhenheit');
			$('h2').show();
		}
	});
});	