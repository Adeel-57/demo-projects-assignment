const open_button = document.getElementById('open-btn');
const close_button = document.getElementById('close-icon');
const Popup = document.getElementById('modal-container');
const Popup_box = document.getElementById('modal-box');

open_button.addEventListener('click',()=>{
    Popup.classList.add('open');
})
close_button.addEventListener('click',()=>{
    Popup.classList.remove('open');
})
Popup.addEventListener('click',(e)=>{
    Popup.classList.remove('open');
})
Popup_box.addEventListener('click',(e)=>{
    e.stopPropagation()
})