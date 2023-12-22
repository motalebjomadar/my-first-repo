const btn = document.getElementById('delete-btn');
const textBox = document.getElementById('text-box');
const title = document.getElementById('section-title');

btn.addEventListener('click', function() {
    title.style.visibility = 'hidden';
})

textBox.addEventListener('keyup', function(event) {
    if(textBox.value == 'delete') {
        btn.removeAttribute('disabled');
    }
    else{
        btn.setAttribute('disabled', true);
    }
});





