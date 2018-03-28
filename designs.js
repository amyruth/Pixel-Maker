<<<<<<< HEAD
// v2 has right click to erase option
=======
/* eslint-env jquery */

>>>>>>> 6bbf004b384f098c60aa985e4b872eff7c1b0b48

function makeGrid(row, col) {
	//clears screen if grid exists
	$('tr').remove();

	for (let r = 1; r <= row; r++) {
		$('#pixelCanvas').append('<tr></tr>');
	};

	for (let c = 1; c <= col; c++) {
		$('tr').append('<td></td>');
	};
}

<<<<<<< HEAD
$(document).ready(function(){
    const clearGrid = $('#clearGrid');
    const pixelCanvas = $('#pixelCanvas');
    let color;

    $('#sendVals').on('click', function(evt){
        //get new values and create grid
        evt.preventDefault();
        let rows, columns;
        rows = $('#inputHeight').val();
        columns = $('#inputWidth').val();

        makeGrid(rows, columns);
    });

    pixelCanvas.on('click', 'td', function(color){
        //grabs color value and applies it to specific td element
        color = $('#colorPicker').val();
        $(this).css('background-color', color);
        $(this).addClass('filled');
        console.log($(this).css('background-color'));
        //works when eraser button is clicked
        if(eraserActive){
            $(this).css('background-color', 'transparent');
        }
    });

    clearGrid.click(function(){
        //reverts entire grid to white
       $('td').css('background-color', 'transparent');
    });

   //right-click to erase care of @DN_1524. Thank you! 
   pixelCanvas.on('contextmenu', 'td', function (e){
        e.preventDefault();
        $(this).css('background-color', 'transparent');
    });
=======
$(document).ready(function () {
	const clearGrid = $('#clearGrid');
	const eraseCell = $('#eraseCell');
	const pixelCanvas = $('#pixelCanvas');
	let eraserActive = false;
	let color;

	$('#sendVals').on('click', function (evt) {
		//get new values and create grid
		evt.preventDefault();
		let rows, columns;
		rows = $('#inputHeight').val();
		columns = $('#inputWidth').val();

		makeGrid(rows, columns);
	});

	pixelCanvas.on('click', 'td', function (color) {
		//grabs color value and applies it to specific td element
		color = $('#colorPicker').val();
		$(this).css('background-color', color);
		console.log($(this).css('background-color'));
		//works when eraser button is clicked
		if (eraserActive) {
			$(this).css('background-color', 'transparent');
		}
	});

	clearGrid.click(function () {
		//reverts entire grid to white
		$('td').css('background-color', 'transparent');
	});

	eraseCell.click(function () {
		//switches eraser on and off
		if (!eraserActive) {
			eraserActive = true;
			$(this).text('Eraser: ON');
			console.log(eraserActive);
		} else {
			eraserActive = false;
			$(this).text('Eraser: OFF');
			console.log(eraserActive);
		};
	});
>>>>>>> 6bbf004b384f098c60aa985e4b872eff7c1b0b48

});
