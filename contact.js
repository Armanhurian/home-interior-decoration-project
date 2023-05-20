let $ = document

let menuBarHeaderItemLink = $.querySelectorAll('.menu-bar__header-item-link')
let myAccountLoginBoxButton = $.querySelector('.myAccount-login-box-button')
let myAccountLoginTextBoxInput = $.querySelector('.text-input')
let myAccountLoginPasswordBoxInput = $.querySelector('.password-input')
let eyeIconActive = $.querySelector('.eye-icon-active')
let adminSiteBox = $.querySelector('.admin-site-box')
let modalChatBox = $.querySelector('.modal-chat-box')
let borderStyleForClose = $.querySelector('.border-style-for-close')
let chatBoxContainer = $.querySelector('.chat-box-container')
let chatUser = $.querySelector('.chat-user')
let userCommentInput = $.querySelector('.user-comment-input')
let userCommentSubmitBtn = $.querySelector('.user-comment-submit')
let userSubmitStyleIcon = $.querySelector('.lc-y3dxrp')
let userSubmitIconColor = $.querySelector('.lc-path')
let adminNames = $.querySelector('.adminNames')



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

adminSiteBox.addEventListener('click',()=>{

    modalChatBox.style.opacity = '1'

    modalChatBox.style.visibility = 'visible'

    modalChatBox.setAttribute('data-aos',"fade-down")

    adminSiteBox.style.display = 'none'

    userCommentInput.addEventListener('keyup',(event)=>{

      if(event.target.value.trim() !== ''){

        userSubmitStyleIcon.style.background = 'burlywood'

        userSubmitStyleIcon.style.borderRadius = '0.4rem'
     
        userSubmitIconColor.style.fill = '#f8f9fa'



    }else{
        
        userSubmitStyleIcon.style.background = 'white'

        userSubmitStyleIcon.style.borderRadius = '0.4rem'
     
        userSubmitIconColor.style.fill = 'rgb(107, 103, 103)'
      }
    })
    
    borderStyleForClose.addEventListener('click',()=>{
        
        modalChatBox.style.opacity = '0'
        
        modalChatBox.removeAttribute('data-aos')
        
        modalChatBox.style.visibility = 'hidden'
        
        adminSiteBox.style.display = 'block'
    })
})

let computerAnswered = [
    'چطور میتونم کمکتون کنم؟',
    'مشکلتون دقیقا چیه ؟',
    'لطفا چند لحظه صبر کنید که من مشکل شما رو بررسی کنم بهتون اطلاع میدم',
    'ممنون از صبوریتون',
    'مشکل شمارو به بخش مدیریت پشتیبانی سایت گزارش دادم به زودی این مشکل رفع خواهد شد',
    'خواهش میکنم روز خوبی داشته باشید'
]

let index = 0


userCommentSubmitBtn.addEventListener('click',()=>{

    if(userCommentInput.value !== ''){

        
        chatBoxContainer.insertAdjacentHTML(`beforeend`,
        `
        <div class="chat-user">
           ${userCommentInput.value}
        </div>
        `
        ) 

        setTimeout(()=>{
    
        chatBoxContainer.insertAdjacentHTML(`beforeend`,
        `
        <div class="chat-computer">
        ${computerAnswered[index]}
        </div>
        `
        ) 

        index++
        
        if(index === 6){
            index = 0
        }
            
        },7000)

        userCommentInput.value = ''
        
    }
         
})

let adminNamesArray = ['علی','نیما','رضا','امین','آرزو','محمد','ستاره'] 

let randomAdmin = Math.floor(Math.random()*adminNamesArray.length)

adminNames.innerHTML = adminNamesArray[randomAdmin]

