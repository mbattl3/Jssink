let firstName = "Mia";
const states = 50; 
let sum = 5 + 4; 

function sayHello() { 
    alert ('Hello!');
};  
sayHello(); 

function checkAge(name, age) {
    if (age < 21) {
    alert ('Sorry ' + name + ', you arent old enough to view this page!');
}};


checkAge('Amy', 29);
checkAge('Lee', 22);
checkAge('Johns', 56);
checkAge('Jimmy', 32);

let favVeg = ['Leek', 'Peas', 'Broccoli', 'carrots']; 
for (let veggies of favVeg){ 
    console.log(veggies);
} 

let pet = { 
    name: 'Zion',
    breed: 'Cat' 
} 
console.log(pet); 

let Randompeople = [ 
    {
        name: 'Lola', 
        age: 43
    },
    {
        name: 'Shane',
        age: 21
    },
    {
        name: 'Nicie',
        age: 25
    },
    {
        name: 'Yez',
        age: 25
    },
    {
        name: 'Adonis',
        age: 24
    }
];

for (let friends of clubMemb) { 
    checkAge(friends.name, friends.age);
}


function getlength(word){ 
    return word.length; 
}
let letters = getlength('Hello World'); 

if (letters % 2 === 0) {
    console.log('The world is nice and even!');
} else {
        console.log('The world is an odd place!');
}

