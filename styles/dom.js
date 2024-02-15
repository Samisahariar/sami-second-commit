const forgotpasselement = document.querySelector('#forgotpass')
const loginpage = document.querySelector('#login-page')
const forgotpage = document.querySelector('#forgot-page')
const returnhomepagebutton = document.querySelector('#return-to-login-page')
const loginmainpage = document.querySelector('#loginmainpage')
const mainpage = document.querySelector('#main-page')
const loginfrontpage = document.querySelector('#login-button')
const userinput = document.querySelector('#user-input')
const passwordinput = document.querySelector('#password-input') 


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
loginmainpage.addEventListener('click', function(){
    changelayout(mainpage, loginpage)
})

loginfrontpage.addEventListener('click', function(){
    if(userinput.value === "sami" && passwordinput.value === "sami1212"){
        changelayout(mainpage, loginpage)
    }
})
