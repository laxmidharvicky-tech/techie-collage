const head = document.querySelector('#myHeading');
const button = document.querySelector('#myButton');

button.addEventListener('click', () => {
    const a = document.createElement('p');
    a.textContent = 'This is a new paragraph.';
    head.appendChild(a);
    
})