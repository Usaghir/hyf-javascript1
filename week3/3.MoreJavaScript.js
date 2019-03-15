//Task 1

function SumOfThree(a,b,c){
  return a+b+c;
}
console.log(SumOfThree(10,20,30));
    

//Task 2

function colorCar(a){
  return "a "+a+" car";
}

console.log(colorCar("red"));

//Task 3 

let anObj = {
  name: "Mobile",
  model : 4,
  colour : "red"
};
function mProp(arg) {
  console.log("Object name is "+anObj.name+"model is "+anObj.model+
  "and colour is "+anObj.colour);
}


// Tast 4 

function vehicle(color, type) {
  switch (type) {
    case 1: {
      console.log(`A ${color} Car`);
      break;
    }
    case 2: {
      console.log(`A ${color} motorbike`);
      break;
    }
  }
}

// Tast 5
function oneLineIf() {
  (3 === 3) ? console.log("Yes") : console.log("No");
}

// Task 6.
function vehicle(color, type, state) {
  type === 1
    ? (type = "car")
    : type === 2
      ? (type = "motorbike")
      : (type = "Other Vechile");
  state <= 1 ? (state = "new") : (state = "used");
  console.log(`A ${color} ${state} ${type}`);


//Task 7.
let list = ["Van", "Car", "Truck", "Trailer", "Bus"];
console.log(list.toString());

// Task 8.
console.log(list[2]);

//Task 9.
function vehicleList(color, type, state) {
  state <= 1 ? (state = "new") : (state = "used");
  console.log(`A ${color} ${state} ${list[type]}`);
}

//Task 10.
function pluralize(word) {
  return word[word.length - 1] === "s" ? word + "es" : word + "s";
}

function ad() {
  let adText = "Amazing Joe's Garage, we service ";

  for (let i = 0; i < list.length; i++) {
    adText += pluralize(list[i]);
    if (i < list.length - 2) {
      adText += ", ";
    } else if (i === list.length - 2) {
      adText += " and ";
    }
  }

  console.log(adText + ".");
}
//Task 11.
list.push("Truck");

//Task 12.
let emptyObj = {};
console.log(emptyObj);

//Task 13 - 14
function modules() {
  let hyfModules = {
    hyfTeacher: [
      "Baraa",
      "Tommy",
      "Mike",
      "Victor",
      "Robin",
      "Chanchal",
      "Rasmus"
    ]
  };

  console.log(hyfModules);

  hyfModules.languages = ["html", "css", "javascript"];

  console.log(hyfModules);
}

//Task 15
function equalityTest() {
  let x = [1, 2, 3];
  let y = [1, 2, 3];
  let z = y;

  console.log(x == y); // false
  console.log(x === y); // false
  console.log(z == y); // true
  console.log(z == x); // false
}

//Task 16
function objChange() {
  let o1 = { foo: "foo" };
  let o2 = { foo: "bar" };
  let o3 = o2;
  let o4 = { foo: "bar" };
  o3.bar = "foo";
  console.log("o3 effect on o2 as well: ", JSON.stringify(o2));

  o1 = { ...o4 };
  o1.bar = "bar";
  console.log(
    "With this cloning method o1 never effect o4: " + JSON.stringify(o4)
  );
}

//Task 17
function typeChecking() {
  let bar = 42;
  console.log(typeof bar);
  //it will give the type of the variable
}

init();
