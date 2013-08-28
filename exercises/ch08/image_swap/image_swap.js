$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
		var caption = $(this).attr("title");
		var imageURL = $(this).attr("href");
		$("#caption").text(caption);
		$("#image").attr("src", imageURL);
		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a:first-child").focus();
}); // end ready