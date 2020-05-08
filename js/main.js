let navbar = () => {$(window).scroll(function() {
   if ($(document).scrollTop() > 50) {
      $('.navigation').addClass('sticky');
   } else {
   $('.navigation').removeClass('sticky');
   }
 });
}

let openNav = () => {

	var x =  document.getElementById("navigation");

	if (x.className === "navigation") {
		x.className += " menujs";
		document.getElementById("threeline-icon").innerHTML = "&Cross;";

	} else {
		x.className = "navigation";
		document.getElementById("threeline-icon").innerHTML = "&#9776;";

	}



}