//Check off todos
$("ul").on("click","li",function(){
	$(this).toggleClass("done");
});
$("ul").on("click","span" ,function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});
$("input[type='text']").on("keypress",function(e){
	if(e.which===13){
		//taking text from input
		var todoText=$(this).val();
		$(this).val("");
		//create new li and add a new todo
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
	}
});
$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});