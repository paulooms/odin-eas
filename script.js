let pixelCount = 16;

function addPixels(amount) {
    const container = document.querySelector('.container');


    for (let i = 0; i < pixelCount; i++) {
        const pixelRow = document.createElement('div');

        pixelRow.classList.add('pixelRow');

        container.appendChild(pixelRow);
    };

    const allPixelRows = document.querySelectorAll('.pixelRow')

    for (let i = 0; i < pixelCount; i++) {
        let thisPixelRow = allPixelRows[i];
        for (let i = 0; i < pixelCount; i++) {
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            thisPixelRow.appendChild(pixel)
        }
    }
}

addPixels(pixelCount);