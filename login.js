let $ = document

let menuBarHeaderItemLink = $.querySelectorAll('.menu-bar__header-item-link')
let myAccountLoginBoxButton = $.querySelector('.myAccount-login-box-button')
let myAccountLoginTextBoxInput = $.querySelector('.text-input')
let myAccountLoginPasswordBoxInput = $.querySelector('.password-input')
let eyeIconActive = $.querySelector('.eye-icon-active')


menuBarHeaderItemLink.forEach(item =>{
    
    
    
    for (let index = 0; index < menuBarHeaderItemLink.length; index++) {
         
         if(menuBarHeaderItemLink[index].href.includes('login')){
             menuBarHeaderItemLink[index].classList.add('menu-active-style')
             
         }
    }
  
     
  })

//start login codes

myAccountLoginBoxButton.addEventListener('click',()=>{
    if(myAccountLoginTextBoxInput.value === ''){
        myAccountLoginTextBoxInput.style.borderColor = 'red'
        myAccountLoginTextBoxInput.setAttribute('placeholder','شماره  موبایل  را  وارد  نکردید')
        
    }else if(myAccountLoginPasswordBoxInput.value === ''){
        myAccountLoginPasswordBoxInput.style.borderColor = 'red'
        myAccountLoginPasswordBoxInput.setAttribute('placeholder','گذرواژه   را  وارد  نکردید')
    }else{
        myAccountLoginTextBoxInput.style.borderColor = 'black'
        myAccountLoginPasswordBoxInput.style.borderColor = 'black'
        swal({
            icon : 'success',
            title: 'تبریک میگم',
            text: 'شما با موفقیت وارد شدید',
            button : ' ورود به درگاه پرداخت'
        }).then((res)=>{
            console.log(res);
        })
    }

})

// create eyes Icon For input

eyeIconActive.addEventListener('click',()=>{
    if(eyeIconActive.className === 'eye-icon-active fas fa-eye'){

        myAccountLoginPasswordBoxInput.removeAttribute('type')
        myAccountLoginPasswordBoxInput.setAttribute('type','text')
        
        eyeIconActive.classList.replace('fa-eye','fa-eye-slash')
    }else{
        
        myAccountLoginPasswordBoxInput.removeAttribute('type')
        myAccountLoginPasswordBoxInput.setAttribute('type','password')
        eyeIconActive.classList.replace('fa-eye-slash','fa-eye')
    }
})

// create eyes Icon For input

let menuBarHeaderList = document.querySelector('.menu-bar__header-list')
let menuIconResponse = document.querySelector('.menu-icon-response')


menuIconResponse.addEventListener('click',()=>{


    if(menuBarHeaderList.className==='menu-bar__header-list'){

        menuBarHeaderList.classList.add('activeResponsiveMenu')
        
    }else{
        
        menuBarHeaderList.classList.remove('activeResponsiveMenu')
        
        
    }

    
})
