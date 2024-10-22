var Animal = /** @class */ (function () {
    function Animal() {
        this.age = '';
    }
    Object.defineProperty(Animal.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "setAge", {
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var dog = new Animal();
dog.setAge = '4';
console.log(dog.getAge);
