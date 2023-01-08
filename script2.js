
let usernameInput2 = document.getElementById('username2');
let password2 = document.getElementById('password2')
let label1_1 = document.getElementById('label1-2')
let label2_2 = document.getElementById('label2-2')
let eMail = document.getElementById('e-mail');
let emailLable = document.getElementById('e-mail_label');

const labelTransition_1 = () =>{
    label1_1.style.marginTop = '0.5rem'
    label1_1.style.marginLeft = '0.1rem'
}
const labelTransition_2 = () =>{
    label2_2.style.marginTop = '0.5rem'
    label2_2.style.marginLeft = '0.1rem'
}
const labelTransition_3 = () =>{
    emailLable.style.marginTop = '0.5rem'
    emailLable.style.marginLeft = '0.1rem'
}

usernameInput2.addEventListener('focusout' , ()=>{
    if(usernameInput2.value == ''){
        label1_1.style.marginTop = '1.7rem'
        label1_1.style.marginLeft = '0.5rem'
    }
})

password2.addEventListener('focusout' , ()=>{
    if(password2.value == ''){
        label2_2.style.marginTop = '1.7rem'
        label2_2.style.marginLeft = '0.5rem'
    }
})

eMail.addEventListener('focusout' , ()=>{
    if(eMail.value == ''){
        emailLable.style.marginTop = '1.7rem'
        emailLable.style.marginLeft = '0.5rem'
    }
})


let signUpRedirectWidth2 = document.getElementById('sign-in-redirect');
// let logIn = document.getElementById('log-in-section');
// let signUp = document.getElementById('sign-up-section');

signUpRedirectWidth2.addEventListener('click' , ()=>{
    
    signUp.style.padding = '3rem 0';
    signUp.style.transform = 'TranslateX(-15rem)';
    signUp.style.width = '0';
    signUp.style.display = 'fixed';
    document.getElementById('forgot-pass2').style.display = 'none'
//     document.getElementById('sign-up-btn').style.display = 'none'
    
    document.title = 'Sign In'
    document.getElementById('forgot-pass').style.display = 'block'
    logIn.style.width = '30rem';
    logIn.style.transform = 'TranslateX(0)'
    logIn.style.padding = '3rem 5rem';
})

let signInRedirectHeight2 = document.getElementById('sign-in-redirect2')


signInRedirectHeight2.addEventListener('click' , ()=>{
    signUp.style.padding = '0 5rem';
    signUp.style.transform = 'TranslateY(-15rem)';
    signUp.style.height = '0';
    signUp.style.display = 'fixed';
    document.getElementById('forgot-pass2').style.display = 'none'
//     document.getElementById('sign-up-btn').style.display = 'none'
    
    document.title = 'Sign In'
    document.getElementById('forgot-pass').style.display = 'block'
    logIn.style.height = '25rem';
    logIn.style.transform = 'TranslateY(0)'
    logIn.style.padding = '3rem 5rem';
})
