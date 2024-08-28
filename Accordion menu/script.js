const accordion_items = document.getElementsByClassName('accordion-items');
const item_icons = document.getElementsByClassName('item-icon');

const arr1 = Array.from(accordion_items);
const arr2 = Array.from(item_icons);

arr2.forEach(element=>{
    element.addEventListener('click',(e)=>{
        arr1.find((item)=>{if(item.id==e.target.id){if(item.classList.contains('open')){item.classList.remove('open')}else{item.classList.add('open')}}else{item.classList.remove('open')}})
    })
});