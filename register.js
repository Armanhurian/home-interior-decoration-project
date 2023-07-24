
let menuBarHeaderItemLink = document.querySelectorAll('.menu-bar__header-item-link')
let myAccountLoginBoxButton = document.querySelector('.myAccount-login-box-button')
let myAccountLoginTextBoxInput = document.querySelector('.text-input')
let myAccountLoginPasswordBoxInput = document.querySelector('.password-input')





menuBarHeaderItemLink.forEach(item =>{
    
    
    
    for (let index = 0; index < menuBarHeaderItemLink.length; index++) {
         
         if(menuBarHeaderItemLink[index].href.includes('login')){
             menuBarHeaderItemLink[index].classList.add('menu-active-style')
             
         }
    }
  
     
  })



//start register codes

let registerPhoneText = document.querySelector('.register-phone-text')
let registerUsenameText = document.querySelector('.register-username-text')
let registerPasswordText = document.querySelector('.register-password-text')
let registerRepeatPasswordText = document.querySelector('.register-repeat-password-text')
let eyeIconActive1 = document.querySelector('.eye-active-pass')
let eyeIconActive2 = document.querySelector('.eye-active-repeat-pass')
let myAccountRegisterBoxButton = document.querySelector('.myAccount-register-box-button')
let ifElseForInputRegisterIconPhone = document.querySelector('.ifElseForInput-register-icon-phone')
let ifElseForInputRegisterIconUsername = document.querySelector('.ifElseForInput-register-icon-username')
let ifElseForInputRegisterIconPassword = document.querySelector('.ifElseForInput-register-icon-password')

let mobileReg = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/

registerPhoneText.addEventListener('keyup',()=>{
    if( mobileReg.test(registerPhoneText.value)){
        ifElseForInputRegisterIconPhone.classList.remove('fa-xmark')
        ifElseForInputRegisterIconPhone.classList.add('fa-check')
        ifElseForInputRegisterIconPhone.style.background = '#11d078'
        ifElseForInputRegisterIconPhone.style.padding = '0.3rem'
        registerPhoneText.style.borderColor = '#11d078'
        
    }else{
        
        ifElseForInputRegisterIconPhone.classList.remove('fa-check')
        ifElseForInputRegisterIconPhone.classList.add('fa-xmark')
        ifElseForInputRegisterIconPhone.style.background = 'red'
        ifElseForInputRegisterIconPhone.style.padding = '0.2rem 0.4rem'
        registerPhoneText.style.borderColor = 'red'

    }
})

registerUsenameText.addEventListener('keyup',()=>{


    if( registerUsenameText.value.length > 7 ){
        ifElseForInputRegisterIconUsername.classList.remove('fa-xmark')
        ifElseForInputRegisterIconUsername.classList.add('fa-check')
        ifElseForInputRegisterIconUsername.style.background = '#11d078'
        ifElseForInputRegisterIconUsername.style.padding = '0.3rem'
        registerUsenameText.style.borderColor = '#11d078'
        
    }else{
        
        ifElseForInputRegisterIconUsername.classList.remove('fa-check')
        ifElseForInputRegisterIconUsername.classList.add('fa-xmark')
        ifElseForInputRegisterIconUsername.style.background = 'red'
        ifElseForInputRegisterIconUsername.style.padding = '0.2rem 0.4rem'
        registerUsenameText.style.borderColor = 'red'

    }
})

registerPasswordText.addEventListener('keyup',()=>{

    registerRepeatPasswordText.addEventListener('keyup',()=>{

        if(registerPasswordText.value === registerRepeatPasswordText.value){
            ifElseForInputRegisterIconPassword.classList.remove('fa-xmark')
            ifElseForInputRegisterIconPassword.classList.add('fa-check')
            ifElseForInputRegisterIconPassword.style.background = '#11d078'
            ifElseForInputRegisterIconPassword.style.padding = '0.3rem'
            registerPasswordText.style.borderColor = '#11d078'
            registerRepeatPasswordText.style.borderColor = '#11d078'
        }else{
            ifElseForInputRegisterIconPassword.classList.remove('fa-check')
            ifElseForInputRegisterIconPassword.classList.add('fa-xmark')
            ifElseForInputRegisterIconPassword.style.background = 'red'
            ifElseForInputRegisterIconPassword.style.padding = '0.2rem 0.4rem'
            registerPasswordText.style.borderColor = 'red'
            registerRepeatPasswordText.style.borderColor = 'red'
        }
    })
})


myAccountRegisterBoxButton.addEventListener('click', clickSubmitRegisterHandler)

function clickSubmitRegisterHandler (){
    if(
        ifElseForInputRegisterIconPhone.style.background == 'rgb(17, 208, 120)' &&
        ifElseForInputRegisterIconUsername.style.background == 'rgb(17, 208, 120)' &&
        ifElseForInputRegisterIconPassword.style.background == 'rgb(17, 208, 120)'
    ){
        swal({
            icon : 'success',
            title: 'تبریک میگم',
            text: 'ثبت نام شما با موفقیت انجام شد',
            button : 'ورود به درگاه پرداخت'
        }).then((res)=>{
            console.log(res);
        })
    }else{
        
        swal({
            icon : 'error',
            title: 'متاسفم !',
            text: 'لطفا طبق راهنما مجددا امتحان کنید ! ',
            button : 'متوجه شدم'
        }).then((res)=>{
            console.log(res);
        })
        
    }
}

let menuBarHeaderList = document.querySelector('.menu-bar__header-list')
let menuIconResponse = document.querySelector('.menu-icon-response')


menuIconResponse.addEventListener('click',()=>{


    if(menuBarHeaderList.className==='menu-bar__header-list'){

        menuBarHeaderList.classList.add('activeResponsiveMenu')
        
    }else{
        
        menuBarHeaderList.classList.remove('activeResponsiveMenu')
        
        
    }

    
})

// create eyes Icon For input

eyeIconActive1.addEventListener('click',()=>{
    if(eyeIconActive1.className === 'eye-icon-active eye-active-pass fas fa-eye'){

        registerPasswordText.removeAttribute('type')
        registerPasswordText.setAttribute('type','text')
        
        eyeIconActive1.classList.replace('fa-eye','fa-eye-slash')
    }else{
        
        registerPasswordText.removeAttribute('type')
        registerPasswordText.setAttribute('type','password')
        eyeIconActive1.classList.replace('fa-eye-slash','fa-eye')
    }
})
eyeIconActive2.addEventListener('click',()=>{
    if(eyeIconActive2.className === 'eye-icon-active eye-active-repeat-pass fas fa-eye'){

        registerRepeatPasswordText.removeAttribute('type')
        registerRepeatPasswordText.setAttribute('type','text')
        
        eyeIconActive2.classList.replace('fa-eye','fa-eye-slash')
    }else{
        
        registerRepeatPasswordText.removeAttribute('type')
        registerRepeatPasswordText.setAttribute('type','password')
        eyeIconActive2.classList.replace('fa-eye-slash','fa-eye')
    }
})

// create eyes Icon For input


//finish register codes

