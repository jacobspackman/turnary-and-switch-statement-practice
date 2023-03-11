// turnary

// let x = 2
// let y = 4
 
// x > y ? console.log(x) : console.log(y);


// switch statement

const grade = `d`;

switch (grade) {
    case `a`:
        console.log("You're Grade is 90% - 100%");
        break;
    case `b`:
        console.log("You're Grade is 80% - 89.99%");
        break;
    case `c`:
        console.log("You're Grade is 70% - 79.99%");
        break;
    case `d`:
        console.log("You're Grade is 60% - 69.99%");
        break;
    case `f`:
        console.log("You're Grade is 0% - 59.99%");    
    default:
        console.log("Sorry, please enter a valid grade");
}