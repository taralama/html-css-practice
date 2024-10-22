type Admin = {
    name: string;
    privileges: string[]
}

type Employee = {
    name: string;
    startDate : Date;
}


type ElevatedEmployee = Admin & Employee; //intersection between the interfaces

const e1 : ElevatedEmployee = {
    name: 'John',
    privileges: ['create-server'],
    startDate : new Date()
}

type Combinable = string | number;
type Numeric = number | boolean

type Universal = Combinable & Numeric  // this is creating the intersection  &