// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let pixelCanvas = $('#pixelCanvas');

function makeGrid(row, col) {
    //clears screen if grid exists
    $('tr').remove();

    for(let r = 1; r <= row; r++){
        $('#pixelCanvas').append('<tr></tr>');
    };

    for(let c = 1; c <= col; c++){
        $('tr').append('<td></td>');
    };
};

$(document).ready(function(){
    let color;

    $('#sendVals').on('click', function(evt){
        //get new values and create grid
        evt.preventDefault();
        let rows, columns;
        rows = $('#inputHeight').val();
        columns = $('#inputWeight').val();

        makeGrid(rows, columns);
    });

    pixelCanvas.on('click', 'td', function(color){
        //placeholder to show event handler is live
        //grabs color value and applies it to specific td element
        console.log('you clicked a cell');
        console.log($(this).css('background-color'));
        color = $('#colorPicker').val();
        $(this).css('background-color', color);
    });

    $('#clearGrid').click(function(){
        //reverts entire grid to white
       $('td').css('background-color', '#fff');
    });
});