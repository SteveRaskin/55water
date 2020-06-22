	console.log("55water.js");
	// 55water.js: views with image grid, full-screen image overlay

	// in views with image grid: select grid elements, append an img el
	const gridCells = document.querySelectorAll(".gallery-img");

	function loadCells() {
		gridCells.forEach(function(el, ix, nodeList) {
			var imgEl = document.createElement("img");
			el.appendChild(imgEl);
			el.addEventListener("click", () => showFeatImg(ix));
			// views w/image grids import their own image array via [page]-images.js
			// e.g., gallery.php loads gallery-images.js w/const gridCellImgUrls = [ ...
			imgEl.src = gridCellImgUrls[ix];
			// imgEl.addEventListener("click", () => showFeatImg(ix)); // NG with the closure ... why?
			imgEl.addEventListener("click", showFeatImg(ix));
		})
	} // loadCells
	loadCells();


	// TOGGLE FULL-SCREEN IMAGE
	const featImgFrame = document.querySelector(".container-gallery");
	const featImg = document.querySelector(".gallery-overlay img");
	const featImgCloser = document.querySelector(".gallery-overlay .closer");

	function	showFeatImg(ix) {
 		return function() {
			featImg.src = featImgUrls[ix];
			featImgFrame.classList.add("overlay-on");
		}
	} // showImg

	featImgCloser.addEventListener("click", function(){
		featImgFrame.classList.remove("overlay-on");
	})


//
