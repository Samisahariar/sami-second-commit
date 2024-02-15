const forgotpasselement = document.querySelector('#forgotpass')
const loginpage = document.querySelector('#login-page')
const forgotpage = document.querySelector('#forgot-page')
const returnhomepagebutton = document.querySelector('#return-to-login-page')


function changelayout(frompage, topage){
    frompage.classList.add('hidden')
    topage.classList.remove('hidden')
}

forgotpasselement.addEventListener('click', function(){
    changelayout(loginpage, forgotpage)
})
returnhomepagebutton.addEventListener('click', function(){
    changelayout(forgotpage, loginpage)
})
