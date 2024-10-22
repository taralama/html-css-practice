class Department {

    private employees:string[]=[];
    constructor(private readonly id:string,public departName:string){

    }
   


    addEmployee(employee:string){
        
        this.employees.push(employee)
    }

    showEmployees(){

        for(let list of this.employees){
            console.log(list);
        }
    }

    
}


class ITDepartment extends Department{
    admins: string[];
    constructor(id:string,admins: string[]){
        super(id,"IT");
        this.admins = admins;

    }

    addAdmin(name:string){
        this.admins.push(name)
    }

    showAdmin(){
        console.log(this.admins)
    }

}



const department = new Department('00','Maindepartment')
const it = new ITDepartment('0IT',['Max'])
console.log(it.departName)
it.addEmployee('John');
it.addEmployee('Nukesh')
it.showEmployees()
// console.log(it)


it.addAdmin('Samrita')
it.addAdmin('Tara')

