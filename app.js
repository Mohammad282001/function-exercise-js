//Q1. Write a JavaScript function that reverses a number.
function reverse(x) {
    let xString = x.toString();
    let xRev = xString.split("").reverse().join("");
    return(xRev)
}
console.log(reverse("532443"));

// Q2. Use a loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the console .
for (let i = 0; i <=15; i++) {
    if (i % 2 == 0) {
        console.log(i + " Is Even")
    }
    else { 
        console.log(i + " Is Odd")
    }
    
}

//Q3. Write a function that returns a string that has letters in alphabetical order.
function alphabetical(toAlpha) {
    let result = toAlpha.toLowerCase().split("").sort().join("");
    return result

}
console.log(alphabetical("Orange"))

//Q4. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number
// Q4
let l= 91247786 ;
let numdash = l.toString();
let result ="";
let k = "0";
function eveen(){
for (let i = 0; i < numdash.length; i++) {
    if(i < numdash.length - 1 && parseInt(numdash[i]) % 2 === 0 && parseInt(numdash[i + 1]) % 2 === 0 )
        {
            k= "-";
        } 
    else{
        k="";
    }
    result += numdash[i] + k
}
return console.log(result);
}

eveen();

// Q5
function age(z){
    let x = z >=18 ? 'The user is Adult': 'The user is Minor';
    return console.log(x);
}
age(24);
