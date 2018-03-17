$("#ul").on("click","li", function(){
	$(this).toggleClass("done1");
})

$("ul").on("click",".del",function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
})

$("#input").keypress(function(event){
	if(event.which==13)
	{
		$("#ul").append("<li><span class=\"del\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span> "+$(this).val()+"</li>");
		$(this).val("");
	}
})
$(".fa-plus").on("click", function() {
	$("#input").fadeToggle(500);
})
	