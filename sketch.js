let currentPage = '#splash'
let players = []
let colors = ['red', 'blue', 'green', 'yellow']
let bodyparts = ['left knee', 'right knee', 'left shoulder', 'right shoulder', 'left foot', 'right foot', 'head']

function setup(){
    setTimeout(() => shift('#names'), 1000)

    select('#add').mousePressed( () => {
        //to do - check input field
        let name = select('#name').value()
        select('#name').value('')
        players.push(name)
        select('#playerList').html(players.join('<br>'))
        console.log(players)
    })

    select('#start').mousePressed( () => {
        turn()
        shift('#task') 
    })

    select('#nextTurn').mousePressed(turn)
    select('#toEnd').mousePressed(finish)
    select('#new').mousePressed( () => {
        shift('#splash') 
        setTimeout(()=>shift('#names'), 2000)
    })
}

function turn () {
    select('#spinner').show()
    select('#color').html('')
    select('#bodypart').html('')
    select('#turnButtons').hide()
    let col = random(colors)
    let bodypart = random(bodyparts)
    console.log(col)
    setTimeout(()=>{
        select('#spinner').hide()
        select('#color').html(col)
        select('#bodypart').html(bodypart)
        select('#turnButtons').show()
    }, 2000)
}

function finish(){
    let string = 'Okay ' + players.join(' og ') + '- tak for spillet! I klarede x runder' 
    select('#thanks').html(string)
    players = []
    select('#playerList').html('')
    shift('#end')
}

function shift (newPage) {
    select(newPage).addClass('show')
    select(currentPage).removeClass('show')
    currentPage = newPage
}    

function keyPressed(key) {
    if (key.key == 1) shift('#splash')
    if (key.key == 2) shift('#names')
    if (key.key == 3) shift('#task')
}

