const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        if (e.target.id === 'lightpink') {
            body.style.backgroundColor = 'lightpink';
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor = 'orange';
        }
        if (e.target.id === 'lightskyblue') {
            body.style.backgroundColor = 'lightskyblue';
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = 'purple';
        }
    });
});