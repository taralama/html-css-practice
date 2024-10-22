//type check for object


interface person {
    name: string;
    age: number;
    greet():void;
}

interface person{
    hobbies: string[]
}


const user1: person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'swimming'],
    greet(){}
}



console.log(user1)


//interface with class

interface Animals{
    name: string;
    type: string;
    sound:string;

}

class A implements Animals{
    name: string = ''
    type: string = ''
    sound: string = ''
    constructor(name:string,type:string,sound:string){
        this.name = name;
        this.type = type;
        this.sound = type;
    }
}

const animalObj = new A('Dog','pet','bark')

console.log(animalObj)