names = ['Glimpse with your eyes', 'Take a peep', 'Observe the state', 'Open your eyes', 'Perceive', 'Use your sight']
button = document.querySelector('#open')
result = 0
open_plr = false
open_com = false

function comloop() {
    if (result == 0) {
        setTimeout(function(){
            if (open_com == false) {
                if (open_plr == true) {
                    document.querySelector('#com').style.backgroundColor = 'rgb(147, 168, 220)'
                    win()
                } else {
                    open_com = true
                    document.querySelector('#com').style.backgroundColor = 'rgb(147, 168, 220)'
                    setTimeout(function(){
                        open_com = false
                        document.querySelector('#com').style.backgroundColor = 'black'
                        comloop()
                    }, 3000);
                }
            }
        }, Math.floor(Math.random() * 15000));
    }
}

function openeyes() {
    if (result == 0) {
        if (open_plr == false) {
            if (open_com == true) {
                document.querySelector('body').style.backgroundColor = 'white'
                button.style.display = 'none'
                document.querySelector('#com').style.display = 'block'
                lose()
            } else {
                open_plr = true
                document.querySelector('body').style.backgroundColor = 'white'
                button.style.display = 'none'
                document.querySelector('#com').style.display = 'block'
                setTimeout(function(){
                    if (result == 0) {
                      open_plr = false
                      button.style.display = 'block'
                      document.querySelector('#com').style.display = 'none'
                      document.querySelector('body').style.backgroundColor = 'black'
                      button.innerHTML = names[Math.floor(Math.random() * names.length)]
                    }
                }, 3000);
            }
        }
    }
}

function win() {
    result = 1
    document.querySelector('#com').innerHTML = 'You Win!'
    for (i=0; i<=5; i++) {
        clearTimeout()
    }
}

function lose() {
    result = -1
    document.querySelector('#com').innerHTML = 'You Lose!'
    for (i=0; i<=5; i++) {
        clearTimeout()
    }
}

comloop()
