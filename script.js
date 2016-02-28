/* Pseudocode 
1. Array of cityNames
2. For each city in cityNames, create a new option for the dropdown
3. When user selects a dropdown, add a class to the page body based on the content of the dropdown (i.e. the city)

*/

// set up variables
var cityChoice;

var cityNames = ["NYC", "SF", "LA", "ATX", "SYD"];

for (i=0;i<cityNames.length;i++) {
	$('#dropdown').append('<option value=' + cityNames[i] + '>' + cityNames[i] + '</option')
};

$('select').on('change',function(){
	cityChoice = $(this).val();
	if(cityChoice==="NYC") {
		$('body').removeClass();
		$('body').addClass("nyc");
	} else if (cityChoice==="ATX") {
		$('body').removeClass();
		$('body').addClass("austin");
	} else if (cityChoice==="SF") {
		$('body').removeClass();
		$('body').addClass("sf");
	} else if (cityChoice==="LA") {
		$('body').removeClass();
		$('body').addClass("la");
	} else if (cityChoice==="SYD") {
		$('body').removeClass();
		$('body').addClass("sydney");
	} else {
		$('body').removeClass();
		$('body').addClass("other");
	}
});

/* 
1. On clicking submit, save the value of the text from the city-type inpt form
2. Automatically remove any existing 'body' classes so you don't have multiple city backgrounds
3. If the user submitted value equals any of the city names, change background to that city

/*
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

*/