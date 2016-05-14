// grab sloths.json, parse JSON, select a sloth for initial load.
sloths = [];
slothpen = "http://tsmuse.github.io/babysloths/sloths.json";
$.getJSON(slothpen)
.done(function(data){
	console.log("finished");
	sloths = data;
	slothme();
})
.fail(function(){
	console.log("Couldn't find sloths in GitHub. Github may be down?");
	console.log("pulling sloths from local source. May not be as fresh.");
	$.getJSON("sloths.json")
	.done(function(data){
		console.log("finished from local");
		sloths = data;
		slothme();
	});
});

$('.sloth-button').on('click',function(event){
	event.preventDefault();
	slothme();
});
//function to handle putting baby sloths in ya face
function slothme(){
	pick = Math.floor(Math.random() * (sloths.length +1));
	sloth = sloths[pick];
	// inserting the correct image and data goes here. 
	$('.image-area').html("<img src='" + sloth.image_url + "' alt='baby sloth image from " + sloth.image_source + "'/>");
	$('.credits-area').html("<p>Original: <a href='" + sloth.image_source + "'>" + sloth.title + "</a></p>");
}