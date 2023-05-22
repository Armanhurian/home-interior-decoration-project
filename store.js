let $ = document

let menuBarHeaderItemLink = $.querySelectorAll('.menu-bar__header-item-link')
let myAccountLoginBoxButton = $.querySelector('.myAccount-login-box-button')
let myAccountLoginTextBoxInput = $.querySelector('.text-input')
let myAccountLoginPasswordBoxInput = $.querySelector('.password-input')
let eyeIconActive = $.querySelector('.eye-icon-active')




menuBarHeaderItemLink.forEach(item =>{
    
    
    
    item.addEventListener('click',(event)=>{
   
        for (let index = 0; index < menuBarHeaderItemLink.length; index++) {
            
            if(menuBarHeaderItemLink[index].className === 'menu-bar__header-item-link menu-active-style'){
                menuBarHeaderItemLink[index].classList.remove('menu-active-style')
                
            }
        }
        
        event.target.classList.add('menu-active-style')
        
    })
    
})