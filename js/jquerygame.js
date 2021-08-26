$(document).ready(function(){
    $("#startbutton").click(function(){
        $(this).hide();
    });
});

$(document).ready(function(){
    $("#pausebutton").click(function(){
        $(this).hide();
        $("#resumebuttondiv").show();
    });
});

$(document).ready(function(){
    $("#resumebutton").click(function(){
    	$("#resumebuttondiv").hide();
        $("#pausebutton").show();
    });
});