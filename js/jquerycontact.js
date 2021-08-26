$(document).ready(function(){
			$(".jQuery").on({
				focus: function(){
					$(this).css("background-color", "lightblue");
				}, 
				blur: function(){
					$(this).css("background-color", "white");
				}  
			});
		});