'use strict';



function creatingLiElement() {

    var li = document.createElement('li');
    var input = document.querySelector('.sometext');
    li.appendChild(document.createTextNode(input.value));
    document.querySelector('.list').appendChild(li);

    var btn = document.createElement('input');
    btn.value = 'del';
    btn.type = 'button';
    document.querySelector('.list').appendChild(btn);

    btn.onclick = function () {
        var list = document.querySelector('.list');
        list.removeChild(li);
        list.removeChild(btn);
    };
}



document.querySelector('.btn').addEventListener('click', creatingLiElement);

