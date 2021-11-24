const screen = document.getElementById('screen')
const buttons = Array.from(document.getElementsByTagName('span'))
// Flag to check if the text in the input field is evaluated of just an expression
let isEvaluated = false

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                screen.innerText = ''
                break
            case '=':
                try{
                    screen.innerText = eval(screen.innerText)
                }
                catch{
                    screen.innerText = 'Error!'
                }
                isEvaluated = true
                break
            default:
                if(isEvaluated){
                    screen.innerText = ''
                    isEvaluated = false
                }
                screen.innerText+=e.target.innerText
        }
    })
})