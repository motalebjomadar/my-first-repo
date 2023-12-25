const delegateContainer = document.getElementById('delegate-container');
const items = document.getElementsByClassName('bubble-item');
const btn = document.getElementById('btn');

// for(const item of items) {delegate-container
//     item.addEventListener('click', function (event) {
//         // bubbleContainer.removeChild(item);
//         event.target.parentNode.removeChild(event.target);
//     });
// }
delegateContainer.addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
})


btn.addEventListener('click', function() {
    const li = document.createElement('li');
    li.classList.add('bubble-item');
    li.innerText = 'Added new item';
    delegateContainer.appendChild(li);
})






