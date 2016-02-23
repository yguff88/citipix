// set up variables
var cityChoice;
/* 
1. On clicking submit, save the value of the text from the city-type inpt form
2. Automatically remove any existing 'body' classes so you don't have multiple city backgrounds
3. If the user submitted value equals any of the city names, change background to that city

*/
function submit(){
	$('body').removeClass();
	cityChoice = $('#city-type').val().toLowerCase();
	if(cityChoice==="new york" || cityChoice==="new york city" || cityChoice==="nyc") {
		$('body').addClass("nyc");
	} else if (cityChoice==="austin" || cityChoice==="atx") {
		$('body').addClass("austin");
	} else if (cityChoice==="san francisco" || cityChoice==="sf" || cityChoice==="bay area") {
		$('body').addClass("sf");
	} else if (cityChoice==="los angeles" || cityChoice==="la" || cityChoice==="lax") {
		$('body').addClass("la");
	} else if (cityChoice==="sydney" || cityChoice==="syd") {
		$('body').addClass("sydney");
	} else {
		$('body').addClass("other");
	}
};
	
// on click update background image
$(document).ready(function(){
$('#submit-btn').on('click',function(event){
event.preventDefault();
submit();
});
});