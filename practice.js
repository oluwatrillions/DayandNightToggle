const ball = document.querySelector('.ball');
const container = document.querySelector('.container');

ball.addEventListener("click", function(){
    ball.classList.toggle('ballToggle');
    toggle();
})

function toggle(){
    container.classList.toggle('lightMode')
}
