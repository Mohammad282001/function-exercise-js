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
