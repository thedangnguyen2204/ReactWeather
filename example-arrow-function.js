var names = ["a", "b", "c"];

// name.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// name.forEach((name) => console.log("Arrow", name));

var person = {
  name: "Dang The",
  greet: function () {
    names.forEach ((name) => {
      console.log(this.name + " says hi to " + name);
    });
  }
};

person.greet();
