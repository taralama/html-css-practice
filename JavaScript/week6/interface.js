//type check for object
var user1 = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'swimming'],
    greet: function () { }
};
console.log(user1);
var A = /** @class */ (function () {
    function A(name, type, sound) {
        this.name = '';
        this.type = '';
        this.sound = '';
        this.name = name;
        this.type = type;
        this.sound = type;
    }
    return A;
}());
var animalObj = new A('Dog', 'pet', 'bark');
console.log(animalObj);
