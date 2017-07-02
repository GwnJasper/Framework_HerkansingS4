function autoScrollTo(el) {
    var speed = getFieldValue("speed");
    var distance = getFieldValue("distance");
    if(distance > 0  && speed > 0){
        var scrollY = 0;
	    var currentY = window.pageYOffset;
	    var targetY = document.getElementById(el).offsetTop;
	    var bodyHeight = document.body.offsetHeight;
	    var yPos = currentY + window.innerHeight;
	    var animator = setTimeout('autoScrollTo(\''+el+'\')',speed);
        if(yPos > bodyHeight){
            clearTimeout(animator);
        } 
        else {
            if(currentY < targetY-distance){
                scrollY = currentY+distance;
                window.scroll(0, scrollY);
            } else {
                clearTimeout(animator);
            }
        } 
    }
    else{
        alert('een van de waarder zijn geen nummers')
    }
}

function resetScroller(el){
    var speed = getFieldValue("speed");
    var distance = getFieldValue("distance");
    if(distance > 0  && speed > 0){
        var scrollY = 0;
        var currentY = window.pageYOffset;
        var targetY = document.getElementById(el).offsetTop;
        var animator = setTimeout('resetScroller(\''+el+'\')',speed);
        if(currentY > targetY){
            scrollY = currentY-distance;
            window.scroll(0, scrollY);
        } else {
            clearTimeout(animator);
        }
    }
}

function getFieldValue(fieldName) {
    var result = 0;
   var field = document.getElementById(fieldName);
    if(field && isNumeric(field.value) ){
        result = parseInt(field.value);
    }
    return result;
}


function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
