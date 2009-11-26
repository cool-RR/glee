jQuery(document).ready(function(){
	//activating the noConflict mode of jQuery
	jQuery.noConflict();
	
	/* initialize the searchBox */
	Glee.initBox();
	
	jQuery(document).bind('keypress',function(e){
		//pressing 'g' toggles the gleeBox
		if(e.which == 103)
		{
			e.preventDefault();
			if(jQuery(e.target).attr('id') != 'gleeSearchField')
			{
				if(Glee.searchBox.css('display') == "none")
				{					
					//reseting value of searchField
					Glee.searchField.attr('value','');
					
					Glee.searchBox.css('display','block');
					Glee.searchField.focus();					
				}
				else
				{
					Glee.searchBox.css('display','none');
				}
				
			}
		}

		//pressing 'esc' also hides the gleeBox
		if(e.keyCode == 27)
		{
			e.preventDefault();			
			Glee.searchBox.css('display','none');
		}
	});
})

var Glee = { 
	initBox: function(){
		//creating the div to be displayed
		var inputField = jQuery("<input type=\"text\" id='gleeSearchField' value='' />");
		var searchBox = jQuery("<div id=\"gleeBox\"></div>");
		searchBox.append(inputField);
		this.searchBox = searchBox;
		this.searchField = inputField;
		jQuery(document.body).append(searchBox);
	}
}
