const person = {
  firstName: "Surendra",
  lastName: "Tamang",

  fullName: function () {
    console.log(this);
    const firstName = "Anish";
    const lastName = "Shrestha";
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

const car = {
  model: "suzuki",
  year: 2020,
  fullDetail: function () {
    return this; // this refers to the car object
  },
};

console.log(car.fullDetail());

function show() {
  console.log("this is show", this);
}

show();
//add new commentg
