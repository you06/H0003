function cssInit() {
	/*This codes are for the shape under the "chosen rectangle" of the 
	  navigator.
	  It can't be fixed because the words' length is different.
	*/
	var width = null;
	if (window.getComputedStyle) //Firefox, Safari, ...Chrome
		width = window.getComputedStyle(
			document.getElementById("naviChosen"), false).width;
	else //IE, Opera
		width = document.getElementById("naviChosen").currentStyle.width;
	if (width == "auto")
		width = "95px"; //What the hell of Chrome?
						//Do you or don't you support "getComputedStyle"?!
	//alert("" + width + " 17px");
	document.getElementById("naviChosen").style.backgroundSize =
		"" + width + " 17px";
}