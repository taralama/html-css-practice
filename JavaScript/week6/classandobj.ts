// class animal {
//     private name: string;

    
//     running(){
//         console.log(this.name + ' is runng')
//     }
//     constructor (n:string){
//         this.name = n;
//         console.log(this.name)
        

//     }

    
// }
// const dog = new animal('dog')
// const cat = new animal('cat')
// dog.running()


// //shorthand

// class Department{
//     //dont add here
//     private employees : string []= []

//     constructor (private id: string, private name:string){
        
//         this.employees.push(name)
//     }

//     addEmployee (employee: string){
//         this.employees.push(employee)
//     }

//     showEmployee(){
//         console.log(this.employees)
//     }
// }

// const department = new Department('1','suren')
// department.addEmployee('Anish')
// department.addEmployee('Nukesh')
// department.showEmployee();
// // console.log(Department)


// //inheritance

// class ITDepartment extends Department{
//     admins: string[];
//     constructor(id:string,admins: string[]){
//         super(id,'IT');
//         this.admins = admins
//     }

// }

// const IT = new ITDepartment('1',['Rohan'])
// console.log(IT)


// //overriding properties

// class Accounting extends Department{
//     Accountant: string[] = [];
//     constructor(employee:string){
//         super('1A', 'Account');
//     }

//     addEmployee(employee: string): void {
//         this.Accountant.push('string')
        
//     }


// }

// const accounting = new Accounting('Nukesh')
// console.log(accounting.addEmployee('nukesh'))
