// Declare and initialize the following variables with appropriate values:
// ○ name (string) - Mitch Cuckovich
// ○ age (number) - 25
// ○ birthday (string) - January 24
// ○ detroitGC (boolean) - choose either true or false
// ○ lifeEvents (array with 4 items. 4 important life events)
// ■ "I was born in Troy, Michigan.",
// ■ "I went to Hope College",
// ■ "I went to Junior Olympics when I was 10 years old. I placed 14th in the
// nation in the 800 meter event.",
// ■ "I'm a graduate of the front-end bootcamp."
// ● Write an if/else statement that runs one of two console.log methods. Your console.log
// methods must incorporate the variables: name, age, and birthday.
// ○ If detroitGC is true, log the following message to the console:
// ■ My name is name and I am a student at Grand Circus in Detroit, Michigan.
// I am currently age years old and my birthday is on birthday.
// ○ else
// ■ My name is name and I am a student at Grand Circus in Grand Rapids,
// Michigan. I am currently age years old and my birthday is on birthday.
// ● Write a for loop that starts at 0 and iterates by increments of 1 while i is less than the
// length of the lifeEvents array. Each iteration of the loop should log a new sentence
// from the lifeEvents array. You should only have one console.log method.
// ● Declare and initialize a variable named counter to the value of 0.
// ● Write a while loop that loops while true.
// ○ Declare a variable named randomNumber that is initialized to a random integer
// between 1 and 10. Google search how to do this.
// ○ Write an if/else statement that has two conditions
// ■ If randomNumber is not equal to 5
// ● Increment counter
// ● Use a console.log method to say: “randomNumber !== 5”
// Else
// ● Increment counter
// ● Use a console.log method to say: “5 === 5. It took counter
// iterations to randomly generate the number 5.”
// ● Break




let name = "Abdullah Hamidudeen";

let age = 20;

let birthday = "febuary 41";

let detroitGC = true;

let lifeEvents = ["I was born in big rapids, Michigan.", "I moved around my whole life.", "I went to a Travis Scott concert for free.", "Chicken nooodle toaster stroodle."];

if (detroitGC === true){
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for (let i = 0; i < lifeEvents.length; i++){
    console.log(lifeEvents[i]);
}

let counter = 0;
let randomNumber = Math.floor((Math.random() * 10) +1);

while ( randomNumber = Math.floor((Math.random() * 10) +1)){
    if (randomNumber !== 5 ){
     counter++;
     console.log( `${randomNumber} !==5`);
    }else {
        counter++;
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
        break;
    }
}


let hours = 60;

let wage = 52;

if(hours <= 40){
    let paycheck = hours * wage;
    let weeks = Math.ceil(1000000/paycheck);
    console.log(`With wage=${wage} and hours=${hours} it would take ${weeks} weeks.`)

console.log(paycheck);
} else {
    let overtime = (hours - 40) * (wage * 1.5);
    let paycheck = 40 * wage + overtime;
    let weeks = Math.ceil(1000000/paycheck);
    
    console.log(`With wage=${wage} and hours=${hours} it would take ${weeks} weeks.`);


}