const first_name = document.getElementById('first_name')
const last_name = document.getElementById('last_name')
const user_name = document.getElementById('user_name')
const password = document.getElementById('password')
const phone_number = document.getElementById('phone_number')
const email = document.getElementById('email')
const form = document.getElementById('sign_up_form')

form.addEventListener('submit',(e) => {
    let messages = []
    if(first_name!== '' && last_name !== '' && user_name!== '' && password !== '' && phone_number !== '' && email!== '' ){
        messages.push('First name is a amandatory field');
        e.preventDefault()
    }else{
        window.location.href="home.html";
    }
    
})

function register_function(){
    if(first_name!== '' && last_name !== '' && user_name!== '' && password !== '' && phone_number !== '' && email!== '' ){
        alert("The fields couldn't be empty");
    }else{
        window.location.href="home.html";
    }
    
}