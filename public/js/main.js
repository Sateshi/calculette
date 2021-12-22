let textarea1 = document.querySelector('input');
let textarea2 = document.querySelectorAll('input')[1];
let button1 = document.querySelector('button');
let reponse1 = document.querySelector('#response1')

button1.addEventListener('click',function(e) {
    reponse1.innerText = parseInt(textarea1.value) + parseInt(textarea2.value)
})

