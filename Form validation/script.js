const form_field = document.querySelector('form');
const fullname = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

let data = {
    name:'',
    email:'',
    password:'',
};
let error = {};
const validation = {
    name:[{required:true, message:'please enter your name'}],
    email:[{required:true, message:'please enter your email address'}],
    password:[{required:true, message:'please enter a password'}]
}
function validate(data){
    Object.entries(data).forEach(([key, value])=>{
        validation[key].some((rule)=>{
            if(rule.required && !value.trim()){
                error[key] = rule.message; 
            }else{
                error[key]='';   
            }
        });
    });
};
form_field.addEventListener('submit',(e)=>{
    e.preventDefault();
    data.name = fullname.value;
    data.email = email.value;
    data.password = password.value;
    validate(data);
    Object.entries(error).map(([key, value])=>{
        if(key=='name' && value){
            fullname.nextElementSibling.innerText=value;
        }
        if(key=='name' && !value){
            fullname.nextElementSibling.innerText=value;
        }
        if(key=='email' && value){
            email.nextElementSibling.innerText=value;
        }
        if(key=='email' && !value){
            email.nextElementSibling.innerText=value;
        }
        if(key=='password' && value){
            password.nextElementSibling.innerText=value;
        }
        if(key=='password' && !value){
            password.nextElementSibling.innerText=value;
        }
        if(error.name=='' && error.email=='' && error.password==''){
            fullname.value='';
            email.value='';
            password.value='';
        }
    }); 
});

