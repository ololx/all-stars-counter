/**
 * The type StarVis
 *
 * @author Alexander A. Kropotin
 * @project all-stars-counter
 * @created 25.11.2021 15:40
 */ 
var StarVis = function(body, painter) {

	/**
	 * The img can be updated by new pic
	 */
	var _img = null;

	/**
	 * The img painter can write img
	 */
	var _painter = null;

	this.paint = function(count = 0) {
		_painter.apply(_img, count);

		return this;
	}

	var _init = function(body = null, painter = new BasicStarVisPainter()) {
		let starsImage = document.getElementById('star');
		if (typeof starsImage == 'undefined' || starsImage == null) {
			starsImage = document.createElement('img');
			starsImage.setAttribute("id", "star");
			body.appendChild(starsImage);
		}

		_img = starsImage;
		_painter = painter;
	}

	_init(body);
}

/**
 * The type BasicStarVisPainter
 *
 * @author Alexander A. Kropotin
 * @project all-stars-counter
 * @created 25.11.2021 16:40
 */ 
 var BasicStarVisPainter = function() {

 	this.apply = function(img = null, count = 0) {
 		img.src = 'data:image/svg+xml,' 
			+ encodeURIComponent(`
				<svg xmlns="http://www.w3.org/2000/svg" width="165" height="120">
					<polygon points = "90,5 30,120 165,50 15,50 150,120" fill = "yellow"/>
					<text fill="red" font-size="60" font-family="Times New Roman" x="58" y="90">${count}</text>
				</svg>
			`);
 	}
 }