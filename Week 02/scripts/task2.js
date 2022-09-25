/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myname= 'Carlos Alvanez';


// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
const theNameElement = document.querySelector('#name');
theNameElement.innerHTML = myname;

// Step 3: declare and instantiate a variable to hold the current year
let currentyear = new Date().getFullYear();
console.log("It is now "+currentyear)
const TheyearElement = document.getElementById('year');


// Step 4: place the value of the current year variable into the HTML file
TheyearElement.innerHTML = `Year: <strong>${currentyear}</strong>`;

// Step 5: declare and instantiate a variable to hold the name of your picture

document.querySelector('img')
		.setAttribute('src', 'images/photo3.png');

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const Food = (['Hamburguesa','Pizza','Pupusas','chicken'])

const NewFood = (['Bread'])

const NewF = Food.push(NewFood)


const start = 0;
const deleteCount = 1;
const removeditems = Food.splice(start, deleteCount);

const removedItems = Food.pop();

// Step 2: place the values of the favorite foods variable into the HTML file
const TheFoodElement = document.querySelector('#food');
TheFoodElement.innerHTML = Food;
// Step 3: declare and instantiate a variable to hold another favorite food

const element = document.getElementById("food");
element.id = 'food2';


const newelement = document.getElementById("food2");
newelement.id = 'food3';

const secondElement = document.getElementById("food3")
secondElement.id = 'food4';

const thirdElement = document.getElementById("food4")
thirdElement.id = 'food5';

// Step 5: repeat Step 2


// Step 6: remove the first element in the favorite foods array


// Step 7: repeat Step 2


// Step 8: remove the last element in the favorite foods array


// Step 7: repeat Step 2



