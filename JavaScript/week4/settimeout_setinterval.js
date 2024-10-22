//every code is run in call stack  stack does not support asyncronous // call stack should be empty to run the task queue
//promises in micro task queue --has higher priority
//task queue //
//the setInterval  and setTimeout is put in Browser
//to visualize the code js visualizer
//debouncing - when user is typing delay search query execution

//Real life example is 
//when user is inactive for longtime logout timer can be set

//real life example is
//updating the stock price after 10sec 

const countSettimeut = setTimeout(()=>{
    console.log('hello')
},3*1000)




let count =0 ;
const countInterval = setInterval(()=>{ // assigning the setInterval to countInterval
    
    console.log(count++)
    
    if (count > 5 ) {
        clearTimeout(countSettimeut)
        clearInterval(countInterval); //clear interval 
    }
},2000)



//timer 


let hour = 0,minute = 0,sec = 0;
setInterval(()=>{

        if (minute > 58){
            hour++;
            minute = 0;
        }
        if(sec > 58){
            minute++;
            sec= 0;
        }
        sec++;
        console.log(`${hour}:${minute}:${sec}`)
    },1000)
