// Program Flow
//
// 1: User clicks on #clickme (this element)
// 2: Increment the value of #click-num by one for each click (eg if clicknum is 0, make it 1; it clicknum is 10, make it 11; etc.)
// 3: If the number of clicks == 5, change the background-color of <body> to red
// 4: Else if the number of clicks == 10, change the background-color of <body> to green
// 5: Else if the number of clicks == 15, change the background-color of <body> to blue
// 6: Else, change the background-color of <body> to black

$(document).ready(function () {
var clickCount = 0;
	$('#clickme').click(function(){
		clickCount ++;
		$('#click-num').html(clickCount);

		if (clickCount === 5) {
			console.log(clickCount);
			$('body').css({"background-color": "red"});
		}else if(clickCount === 10){
			$('body').css('background-color', 'green');
		}else if(clickCount === 15){
			$('body').css('background-color', 'blue');
		}else{
			$('body').css('background-color', 'black');
		}
		console.log($('body').css('background-color'));
	});

});

//'&deg' is the degree symbol//