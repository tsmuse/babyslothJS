// grab sloths.json, parse JSON, select a sloth for initial load.
sloths = [];
$.getJSON("sloths.json")
.done(function(data){
	console.log("finished");
	sloths = data;
	pick = Math.floor(Math.random() * (sloths.length +1));
	sloth = sloths[pick];
	// inserting the correct image and data goes here. 
	//$('body').append("<p><b>" + sloth.title + "</b></p><p>" + sloth.image_url + "</p><p><i>" + sloth.image_source + "</i></p>");
});

//function to handle refresh
