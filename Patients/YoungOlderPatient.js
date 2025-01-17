// Helper function to convert a string into CamelCased string:
const toCamelCase = function(str) {
  // Get the first letter and make it UpperCased:
  let firstLetter = str.charAt(0).toUpperCase();

  // Get the rest of the string and make it LowerCased:
  let rest = str.slice(1).toLowerCase();

  return firstLetter + rest;
};

// Constructor function for creating student objects
function Student(fName, sName) {
  this.firstName = fName;
  this.surName = sName;
}

// Adding method to Student prototype
Student.prototype.sayFullName = function() {
  console.log(toCamelCase(this.firstName) + " " + toCamelCase(this.surName));
};

// Factory function for creating student objects
function studentFactory(fName, sName) {
  let obj = {
      firstName: fName,
      surName: sName,
      sayFullName: function() {
          console.log(toCamelCase(this.firstName) + " " + toCamelCase(this.surName));
      }
  };
  return obj;
}

// Create students objects by literals:
let student1 = {
  firstName: "MARia",
  surName: "petrova",
  sayFullName: function() {
      console.log(toCamelCase(this.firstName) + " " + toCamelCase(this.surName));
  }
};

let student2 = {
  firstName: "petaR",
  surName: "ATANASOV",
  sayFullName: function() {
      console.log(toCamelCase(this.firstName) + " " + toCamelCase(this.surName));
  }
};

// Create student objects with the constructor function:
let student3 = new Student("stoyan", "IVANOV");
let student4 = new Student("maRINA", "hristova");

// Create student objects with the factory function:
let student5 = studentFactory("VaSIL", "poPOV");
let student6 = studentFactory("eliSAVETA", "mihajlova");

// Let's test the objects:
student1.sayFullName();
student2.sayFullName();
student3.sayFullName();
student4.sayFullName();
student5.sayFullName();
student6.sayFullName();

// Constructor for Patient objects:
function Patient(age, firstName, lastName) {
  this.age = age;
  this.firstName = firstName;
  this.lastName = lastName;
}

// Adding method to Patient prototype
Patient.prototype.printAge = function() {
  console.log(this.firstName + " е на " + this.age + " години.");
};

// Creating and using the objects:
var ivan = new Patient(60, "Иван", "Иванов");
var petyr = new Patient(74, "Петър", "Петров");

ivan.printAge();
petyr.printAge();

// Function to determine the younger patient:
function isYounger(patient1, patient2) {
  return patient1.age <= patient2.age;
}

if (isYounger(ivan, petyr)) {
  console.log(ivan.firstName + " е по-млад от " + petyr.firstName);
} else {
  console.log(petyr.firstName + " е по-млад от " + ivan.firstName);
}
