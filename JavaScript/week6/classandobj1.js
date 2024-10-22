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
var Department = /** @class */ (function () {
    function Department(id, departName) {
        this.id = id;
        this.departName = departName;
        this.employees = [];
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.showEmployees = function () {
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var list = _a[_i];
            console.log(list);
        }
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.addAdmin = function (name) {
        this.admins.push(name);
    };
    ITDepartment.prototype.showAdmin = function () {
        console.log(this.admins);
    };
    return ITDepartment;
}(Department));
var department = new Department('00', 'Maindepartment');
var it = new ITDepartment('0IT', ['Max']);
console.log(it.departName);
it.addEmployee('John');
it.addEmployee('Nukesh');
it.showEmployees();
// console.log(it)
it.addAdmin('Samrita');
it.addAdmin('Tara');
