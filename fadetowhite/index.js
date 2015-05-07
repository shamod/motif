/**
 * Draws squares inside another
 *
 * @author - Shamod Lacoul
 */
$(document).ready(function () {
	
	drawSquares(0, 8);

	/**
	 * Draws squares inside another by giving initial color value and 
	 * steps between squares.
	 * @param {Numbers} colorVal represents the value of a color
	 * @param {Number} step - steps between squares
	 */
	function drawSquares(colorVal, step) {
		var square,
			squareDiv,
			dynHeight;

		try {
			square = $('.square');
			square.css('background', '#' + returnHexColors(colorVal));
				
			dynHeight = 100 - step;			
			for(var i = colorVal; i < 16; i = i + 1) {
				square.append($('<div></div>'));
				style = {
						background: "#" + returnHexColors(i),
						height: dynHeight + "%",
						width: dynHeight + "%",
						margin: "auto",						
						position: "absolute",
						left: "0",
						bottom: "0",
						top: "0",
						right: "0"
					}

				square = square.children();
				square.css(style);
			}
		} catch(e) {
			console.error(e.message);
		}
	}

	/**
	 * Return hex color given a number
	 * @param {Number} num to represent hex color value
	 */
	function returnHexColors(num) {
		var color;
		
		if(num > 16) {
			throw new Error('No more than 16 allowed.');
		}
		
		color = num.toString(16).toUpperCase();
		return [color, color, color].join('');
	};
});