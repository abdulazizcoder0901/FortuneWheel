let wheel = document.querySelector('.wheel')
let spinBtn = document.querySelector('.spinBtn')
let value = Math.ceil(Math.random() * 3600)
// console.log(value);

spinBtn.addEventListener('click', () =>{
    wheel.style.transform = 'rotate('+ value +'deg)';
    value += Math.ceil(Math.random() * 3600)
})