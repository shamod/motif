/**
 * Helps create a logic to check and uncheck boxes based on
 * relativity to other check boxes on the same row.
 *
 * @author - Shamod Lacoul
 */
(function() {

	// execute when DOMContentLoaded
	document.addEventListener("DOMContentLoaded", function(){  
	   	checkUncheckBoxes();
	});

	/**
	 * Logic to add eventListener on table element so that the event
	 * is captured on the input[type=checkbox] and help it check unchecked
	 * boxes to the right and uncheck checked boxes to the left.
	 */
	function checkUncheckBoxes() {
		var table = document.querySelector('#table'); 
		
		table.addEventListener('click', function(event) {
			var trs = this.querySelectorAll('tr'),
				thisElem = event.target,
				thisElemId = +thisElem.id,
				currentTr;
			
			if(thisElem.type === 'checkbox') {
				trs = [].slice.call(trs).slice(1);
				
				(function(elem) {
					trs.forEach(function(tr) {				
						var grandParentTr = elem.parentNode.parentNode;
						
						if(tr.isSameNode(grandParentTr)) {
							currentTr = grandParentTr;

							var tds = currentTr.querySelectorAll('td');
							tds = [].slice.call(tds).slice(1);

							tds.forEach(function(td, idx) {
								var input_checkbox = td.childNodes[0];
								thisElem.checked = true;
								if(idx >= thisElemId) {
									input_checkbox.checked = true;
								} else {
									input_checkbox.checked = false;
								}
							});
						}
					});
				})(thisElem);			
			}
		});	
	};
})();