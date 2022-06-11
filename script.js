let pixelCount = 16;

currentColor = "pixelBlack";

let resetButton = document.querySelector('#resetButton');

resetButton.addEventListener("click", function () {
    pixelCount = prompt("How many pixels on each side?");
    if (pixelCount > 64) {
        alert("Don't use numbers higher than 64")
    } else
        resetCanvas(pixelCount);
})

let buttons = document.querySelectorAll('.colorButton');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('currentColor');
        }


        currentColor = buttons[i].id;
        buttons[i].classList.add('currentColor');

        resetButton.classList.remove('pixelBlack', 'pixelRed', 'pixelGreen', 'pixelBlue')
        resetButton.classList.add(`${currentColor}`);
    })
}

function addPixels(amount) {
    const canvas = document.querySelector('.canvas');

    for (let i = 0; i < pixelCount; i++) {
        const pixelRow = document.createElement('div');

        pixelRow.classList.add('pixelRow');

        canvas.appendChild(pixelRow);
    };

    const allPixelRows = document.querySelectorAll('.pixelRow')

    for (let i = 0; i < pixelCount; i++) {
        let thisPixelRow = allPixelRows[i];
        for (let i = 0; i < pixelCount; i++) {
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');

            pixel.addEventListener("mouseover", function () {
                pixel.classList.remove('pixelBlack', 'pixelRed', 'pixelGreen', 'pixelBlue');
                pixel.classList.add(`${currentColor}`);

            })

            thisPixelRow.appendChild(pixel)
        }
    }
}



function resetCanvas(pixelCount) {
    const canvas = document.querySelector('.canvas');

    var child = canvas.lastElementChild;
    while (child) {
        canvas.removeChild(child);
        child = canvas.lastElementChild;
    }

    addPixels(pixelCount);


    let currentRes = document.querySelector('#currentRes');
    currentRes.textContent = `Current resolution: ${pixelCount} by ${pixelCount}`;
}

addPixels(pixelCount);




// array of possible colors
// when click on button set the present color
// add class based on color