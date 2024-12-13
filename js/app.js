const colors =[
    'blue',
    'green',
    'pink',
    'red',
    'orange',
    'black',
]

const boxes = [
    {
        id:1,
        color: 'blue',
    },
    {
        id:2,
        color:'green',
    },
    {
        id:3,
        color:'pink',
    },
    {
        id:4,
        color:'red',
    },
    {
        id:5,
        color:'orange',
    },
    {
        id:6,
        color:'black',
    },
]
let count = 0
const changeCount =()=> {
    count++
    document.getElementById('countDisplay').innerText = count
}
boxes.forEach(item => {
    const box = document.createElement('div')
    box.classList.add('box')
    box.setAttribute('id', `box-${item.id}`)
    box.style.backgroundColor = item.color 
    box.style.width = '200px'
    box.style.height = '200px'
    document.getElementById('gameBoard').appendChild(box)
    box.addEventListener('click', ()=> {
        const idx = Math.floor(Math.random() *  colors.length)
        const randomColor = colors[idx]
    
        box.style.backgroundColor = randomColor
        changeCount()
        console.log(count)
    })
})
