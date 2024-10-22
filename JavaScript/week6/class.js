var animal = /** @class */ (function () {
    function animal(n) {
        this.name = n;
        console.log(this.name);
    }
    return animal;
}());
var dog = new animal('dog');
