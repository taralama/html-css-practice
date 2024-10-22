
const outerDiv = document.getElementById('outerdiv')
const middleDiv = document.getElementById('middlediv')
const innerDiv = document.getElementById('innerdiv')

outerDiv.addEventListener('click',()=>{
    console.log('This is outerDiv')
},true)

middleDiv.addEventListener('click',()=>{
    
    console.log('This is middleDiv')
},true)

innerDiv.addEventListener('click',(event)=>{
    console.log('This is innerdiv')
    event.stopPropagation()
})

//this is capturing making the true in argument


// outerDiv.addEventListener('click',()=>{
//     console.log('This is outerDiv')
// },true)


// middleDiv.addEventListener('click',()=>{

//     console.log('This is middleDiv')
// },true)

// innerDiv.addEventListener('click',()=>{

//     console.log('This is innerdiv')
// },true)

