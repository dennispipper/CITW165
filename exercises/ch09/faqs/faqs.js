$(document).ready(function() {
	$("#faqs h2").first().addClass("minus");
	$("#faqs div").first().show();
	$("#faqs h2").click(
		function() {
			if (! $(this).hasClass("minus")) {
				$("h2").filter(".minus").next().slideUp(1000);
				$("h2").filter(".minus").removeClass("minus");
				$(this).addClass("minus");
		    	$(this).next().slideDown(1000);
		    	// $(this).toggleClass("minus");
		    	// $(this).next().slideToggle(1000);								
			}
	    }
    ); // end click
}); // end ready
