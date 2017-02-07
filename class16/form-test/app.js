$(document).ready(function(){
var name;

$('form').submit(function(event){
	var name = $('#name-input').val();
	console.log(name);
	console.log('4');
	$('#target').html(name);
	event.preventDefault();
});

});
