const inputField = document.querySelectorAll('#inputfield')
const container = document.querySelector('#container')
const assistant = document.querySelector('#alien')
const plate = document.querySelector('#plate')

container.addEventListener('mouseenter' ,function(){
    for(let item of inputField){
        item.addEventListener('mouseenter', function(){
            item.classList.add('bg-white')
        })
        item.addEventListener('mouseout', function(){
            item.classList.remove('bg-white')
        })
    }
})

let initialtop, initialleft;

function move(e){
    const top = e.clientY - initialtop + 50;
    const left = e.clientX - initialleft;
    assistant.style.top = `${top}px`;
    assistant.style.left = `${left}px`;
}

assistant.addEventListener('mousedown', function(e){
    if(!initialtop && !initialleft){
        initialleft = e.clientX
        initialtop = e.clientY
    }
    plate.addEventListener('mousemove', move)
})
assistant.addEventListener('mouseup', function(){
    plate.removeEventListener('mousemove', move)
})
// console.log(plate)
// plate.addEventListener('mousemove', function(event){
//     console.log(event)
// })
