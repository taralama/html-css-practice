const obj = {name: 'jhon',exercise1: 'running ',exercise2 : 'walking',
    exercise: function (){
        console.log('this is  ' + this.exercise1)
        
        const walk = () =>{
            console.log('this is ' + this.exercise2)
        }
        walk()
        
    }

}
console.log(obj.exercise())



const obj2 = {
 greet : 'hi',
 getting : ()=>{
    console.log(this.greet)
 }
}

obj2.getting() 