//track the state of the animated section
var next = null;
var current = "#about"
if (window.location.hash != "" && window.location.hash != "#about"){
	next = window.location.hash;

	animateChange();
}

//animation state
var animating = false;

function animateChange(){
	//TODO sanitiation
	if (true){

		animating = true;
		$(next).addClass("animating");
		$(next).removeClass("hidden");

		$("a[href=\""+current+"\"]").removeClass("selected");
		$("a[href=\""+next+"\"]").addClass("selected");

		setTimeout(closeAnimation, 500);
	}
}

function closeAnimation(){
	$(next).removeClass("animating");

	$(current).addClass("hidden");
	$(current).addClass("nodisp");

	setTimeout(finishAnimation, 200);
}

function finishAnimation() {
	$(current).removeClass("nodisp");

	current = next;
	next = null;
	animating = false;
}

$("#tabs a").click(function(e){
	if(e.target.hash != current && !animating){
		next = e.target.hash;
		animateChange();
	}
});
