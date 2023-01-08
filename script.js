let usernameInput = document.getElementById('username');
let password = document.getElementById('password')
let label1 = document.getElementById('label1')
let label2 = document.getElementById('label2')

const labelTransition = () =>{
    label1.style.marginTop = '0.5rem'
    label1.style.marginLeft = '0.1rem'
}
const labelTransition2 = () =>{
    label2.style.marginTop = '0.5rem'
    label2.style.marginLeft = '0.1rem'
}

usernameInput.addEventListener('focusout' , ()=>{
    if(usernameInput.value == ''){
        label1.style.marginTop = '1.7rem'
        label1.style.marginLeft = '0.5rem'
    }
})

password.addEventListener('focusout' , ()=>{
    if(password.value == ''){
        label2.style.marginTop = '1.7rem'
        label2.style.marginLeft = '0.5rem'
    }
})


let signUpRedirectWidth = document.getElementById('sign-up-redirect');
let logIn = document.getElementById('log-in-section');
let signUp = document.getElementById('sign-up-section');

signUpRedirectWidth.addEventListener('click' , ()=>{

    logIn.style.padding = '3rem 0 ';
    logIn.style.transform = 'TranslateX(15rem)';
    logIn.style.width = '0';
    logIn.style.display = 'fixed';
    document.getElementById('forgot-pass').style.display = 'none'

    document.title = 'Sign Up'
    document.getElementById('sign-up-btn').style.display = 'block'
    document.getElementById('forgot-pass2').style.display = 'block'
    signUp.style.width = '30rem';
    signUp.style.padding = '3rem 5rem';
    signUp.style.transform = 'Translate(0)';
})


let signUpRedirectHeight = document.getElementById('sign-up-redirect2')

signUpRedirectHeight.addEventListener('click' , ()=>{
    logIn.style.padding = '0 5rem ';
    logIn.style.transform = 'TranslateY(15rem)';
    logIn.style.height = '0';
    logIn.style.display = 'fixed';
    document.getElementById('forgot-pass').style.display = 'none'

    document.title = 'Sign Up'
    document.getElementById('sign-up-btn').style.display = 'block'
    document.getElementById('forgot-pass2').style.display = 'block'
    signUp.style.height = '25rem';
    signUp.style.padding = '1rem 5rem';
    signUp.style.transform = 'TranslateY(0)';
    signUp.focus()
})
