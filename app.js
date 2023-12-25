
const addBtn = document.getElementById('btn');

// Create container tag with js dom
addBtn.addEventListener('click', function() {
    const item = document.createElement('li');
    item.classList.add('list-item');
    item.innerText = 'item added';
    document.body.appendChild(item);


    item.addEventListener('click', function (event) {
    
        event.target.parentNode.removeChild(event.target);
    });
})









