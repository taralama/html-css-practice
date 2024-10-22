var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animal = /** @class */ (function () {
    function animal(n) {
        this.name = n;
        console.log(this.name);
    }
    animal.prototype.running = function () {
        console.log(this.name + ' is runng');
    };
    return animal;
}());
var dog = new animal('dog');
var cat = new animal('cat');
dog.running();
//shorthand
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //dont add here
        this.employees = [];
        this.employees.push(name);
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.showEmployee = function () {
        console.log(this.employees);
    };
    return Department;
}());
var department = new Department('1', 'suren');
department.addEmployee('Anish');
department.addEmployee('Nukesh');
department.showEmployee();
// console.log(Department)
//inheritance
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var IT = new ITDepartment('1', ['Rohan']);
console.log(IT);
//overriding properties
var Accounting = /** @class */ (function (_super) {
    __extends(Accounting, _super);
    function Accounting(employee) {
        var _this = _super.call(this, '1A', 'Account') || this;
        _this.Accountant = [];
        return _this;
    }
    Accounting.prototype.addEmployee = function (employee) {
        this.Accountant.push('string');
    };
    return Accounting;
}(Department));
var accounting = new Accounting('Nukesh');
console.log(accounting.addEmployee('nukesh'));
