class Animal{
    private age:string=''

    
    public get getAge() : string {
        return this.age
    }

    
    public set setAge(age : string) {
        this.age = age;
    }
    
    
}

const dog = new Animal()

dog.setAge = '4'
console.log(dog.getAge)
