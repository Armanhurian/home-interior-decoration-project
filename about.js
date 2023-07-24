let $ = document

let menuBarHeaderItemLink = $.querySelectorAll('.menu-bar__header-item-link')
let myAccountLoginBoxButton = $.querySelector('.myAccount-login-box-button')
let myAccountLoginTextBoxInput = $.querySelector('.text-input')
let myAccountLoginPasswordBoxInput = $.querySelector('.password-input')
let eyeIconActive = $.querySelector('.eye-icon-active')



menuBarHeaderItemLink.forEach(item =>{
    
    
    
        for (let index = 0; index < menuBarHeaderItemLink.length; index++) {
 
             
             if(menuBarHeaderItemLink[index].href.includes('about')){
                 menuBarHeaderItemLink[index].classList.add('menu-active-style')
                 
             }
        }
    
         
 })

 let menuBarHeaderList = document.querySelector('.menu-bar__header-list')
 let menuIconResponse = document.querySelector('.menu-icon-response')
 
 
 menuIconResponse.addEventListener('click',()=>{
 
 
     if(menuBarHeaderList.className==='menu-bar__header-list'){
 
         menuBarHeaderList.classList.add('activeResponsiveMenu')
         
     }else{
         
         menuBarHeaderList.classList.remove('activeResponsiveMenu')
         
         
     }
 
     
 }) 