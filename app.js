const textBtn = document.getElementById('submit-btn');
const textBox = document.getElementById('text-content');
const mainContainer = document.getElementById('text-container');

textBtn.addEventListener('click',function() {
    const comment = textBox.value;
    textBox.value = '';
    const p = document.createElement('p');
    p.innerText = comment;
    mainContainer.appendChild(p);
})

