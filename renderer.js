window.onload = function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const importButton = document.getElementById('importImage');

    let drawing = false;

    // Clear the canvas with a white background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    canvas.addEventListener('mousedown', function () {
        drawing = true;
        ctx.beginPath();
    });

    canvas.addEventListener('mousemove', function (event) {
        if (drawing) {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.strokeStyle = 'black';
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    });

    canvas.addEventListener('mouseup', function () {
        drawing = false;
        ctx.closePath();
    });

    importButton.addEventListener('click', function () {
        const image = new Image();
        image.src = 'path_to_your_image.jpg';  // Replace with the path to your image
        image.onload = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);  // Fill the canvas with a white background
            ctx.drawImage(image, 0, 0);  // Draw the imported image on the canvas
        };
    });
};
