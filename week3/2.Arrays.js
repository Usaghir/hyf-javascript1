//Task 2 Arrays!

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe']; 
console.log(favoriteAnimals);
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerkat');
console.log(".splice methoed will put the 'meerkat' at index 1  in the string and 0 mean nothing will be replaced.");
console.log(favoriteAnimals);
console.log("The array has a length of: "+favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
let indexOfMeerkat=favoriteAnimals.indexOf('meerkat');
console.log("The item you are looking for is at index: "+indexOfMeerkat);
