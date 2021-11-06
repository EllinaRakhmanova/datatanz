"use strict"

window.onload = function() {
    document.querySelector('.main-block_circle-button').addEventListener('click', () => {
        document.querySelector('.page').classList.toggle('big-font-size');
    });  
}
