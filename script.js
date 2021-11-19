let screen = document.getElementById('screen');
let buttons =  Array.from(document.getElementsByTagName('span'))

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                screen.innerText = '';
                break;
            case '=':
                try{
                    screen.innerText = eval(screen.innerText);
                }
                catch{
                    screen.innerText = 'Error!';
                }
                break;
            default:
                screen.innerText+=e.target.innerText;
        }
    })
})



