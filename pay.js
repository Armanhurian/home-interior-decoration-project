let menuBarHeaderItemLink = document.querySelectorAll('.menu-bar__header-item-link')
let myAccountLoginBoxButton = document.querySelector('.myAccount-login-box-button')
let myAccountLoginTextBoxInput = document.querySelector('.text-input')
let myAccountLoginPasswordBoxInput = document.querySelector('.password-input')





menuBarHeaderItemLink.forEach(item =>{
    
    
    
    for (let index = 0; index < menuBarHeaderItemLink.length; index++) {
         
         if(menuBarHeaderItemLink[index].href.includes('pay')){
             menuBarHeaderItemLink[index].classList.add('menu-active-style')
             
         }
    }
  
     
  })

//  responsive codes

let menuBarHeaderList = document.querySelector('.menu-bar__header-list')
let menuIconResponse = document.querySelector('.menu-icon-response')


menuIconResponse.addEventListener('click',()=>{


    if(menuBarHeaderList.className==='menu-bar__header-list'){

        menuBarHeaderList.classList.add('activeResponsiveMenu')
        
    }else{
        
        menuBarHeaderList.classList.remove('activeResponsiveMenu')
        
        
    }

    
})
