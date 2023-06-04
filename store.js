let $ = document

let menuBarHeaderItemLink = $.querySelectorAll('.menu-bar__header-item-link')
let myAccountLoginBoxButton = $.querySelector('.myAccount-login-box-button')
let myAccountLoginTextBoxInput = $.querySelector('.text-input')
let myAccountLoginPasswordBoxInput = $.querySelector('.password-input')
let eyeIconActive = $.querySelector('.eye-icon-active')
let filteredBoxCategoriesLink = $.querySelectorAll('.filtered-box__categories-list-link')
let furniture = $.querySelector('.furniture')
let diningTable = $.querySelector('.dining-table')
let lampshade = $.querySelector('.lampshade')
let flowerPot = $.querySelector('.flower-pot')




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

filteredBoxCategoriesLink.forEach((item) => {

    item.addEventListener('click',(event)=>{

        for (let i = 0; i < filteredBoxCategoriesLink.length; i++) {

            if(filteredBoxCategoriesLink[i].className === 'filtered-box__categories-list-link menu-active-style-for-category'){

              filteredBoxCategoriesLink[i].classList.remove('menu-active-style-for-category')
            
            }
        }

       event.target.classList.add('menu-active-style-for-category')

    })
})


