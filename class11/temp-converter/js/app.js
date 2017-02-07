
$(document).ready(function (){
$('h2').hide();
	//stored values
	var temp = 0; 
	var units
	var converted_temp = 0;
	var converted_units

	//interactive elements
	var temp_input = document.getElementById('temp-input');
	var units_input = document.getElementById('select');
	var output = document.getElementById('output-temp');
	var	output_units = document.getElementById('output_units');

$('#convert').click(function(){
		temp = parseFloat(temp_input.value); 
		units = units_input.value;

		if (units == 'C') {
			console.log('hi lil');
			converted_units = 'F';
			converted_temp = (temp * 1.8 + 32);
		//Do the conversion to Fahrenheit
		} else {
			console.log('lil you rule');
			converted_temp = ((temp - 32) / 1.8);
			converted_units = 'C';
			output.html(converted_temp);
			output_units(converted_units);
		//do the conversion to Celsius
		}
		$('h2').show();
		console.log(converted_temp + converted_units);
		});
});