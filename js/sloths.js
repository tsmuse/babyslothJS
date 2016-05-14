// grab sloths.json, parse JSON, select a sloth for initial load.
sloths = [];
slothpen = "sloths.json";
$.getJSON(slothpen)
.done(function(data){
	console.log("finished");
	sloths = data;
	pick = Math.floor(Math.random() * (sloths.length +1));
	sloth = sloths[pick];
	// inserting the correct image and data goes here. 
	$('.image-area').html("<img src='" + sloth.image_url + "' alt='baby sloth image from " + sloth.image_source + "'/>");
	$('.credits-area').html("<p>Original: <a href='" + sloth.image_source + "'>" + sloth.title + "</a></p>");
	//$('body').append("<p><b>" + sloth.title + "</b></p><p>" + sloth.image_url + "</p><p><i>" + sloth.image_source + "</i></p>");
});

$('.sloth-button').on('click',function(event){
	event.preventDefault();
	slothme();
});
//function to handle refresh
function slothme(){
	pick = Math.floor(Math.random() * (sloths.length +1));
	sloth = sloths[pick];
	// inserting the correct image and data goes here. 
	$('.image-area').html("<img src='" + sloth.image_url + "' alt='baby sloth image from " + sloth.image_source + "'/>");
	$('.credits-area').html("<p>Original: <a href='" + sloth.image_source + "'>" + sloth.title + "</a></p>");
}