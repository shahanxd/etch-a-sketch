document.addEventListener('DOMContentLoaded', () => {

    console.log('Etch-a-sketch is ready!');

    const container = document.querySelector('.container');
    const form = document.getElementById('sizeForm');
    const sizeInput = document.getElementById('sizeInput');

    createGrid(100);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        createGrid(sizeInput.value);
    });

    function createGrid(size) {
        container.innerHTML = '';
        const boxSize = 640 / size;

        for (let i = 0; i < size * size; i++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.width = `${boxSize}px`;
            box.style.height = `${boxSize}px`;
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = 'black';
            });
            container.appendChild(box);
        }
    }
});