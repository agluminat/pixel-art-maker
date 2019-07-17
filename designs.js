// Defining variables by selecting the DOM elements.
const color = document.getElementById('colorPicker');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const form = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');

// Handle user's submit, with maximum value 40.
form.addEventListener('submit', function(event) {
    table.innerHTML = '';
    event.preventDefault();
    if (height.value <= 40 && width.value <= 40) {
        makeGrid();
    } else {
        alert('Maximum size is 40 x 40.');
    }
});

// When user clicks on a cell it changes its background color.
table.addEventListener('click', function(event) {
    if (event.target.tagName === 'TD') {
        event.target.style.backgroundColor = color.value;
    }
});

// Canvas should appear when user submits height(x) and width(y).
function makeGrid() {
    for (let x = 1; x <= height.value; x++) {
        var row = document.createElement('tr');
        for (let y = 1; y <= width.value; y++) {
            var cell = document.createElement('td');
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}
