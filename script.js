function add7(number){
    return number + 7;
}

console.log(add7(1));

function multiply(num1, num2){
    return num1 * num2;
}

console.log(multiply(2, 2));

function capitalize(string){
    return string.replace(string.charAt(0), string.charAt(0).toUpperCase());
}

console.log(capitalize("mark"));

function lastletter(string){
    return string[string.length-1];
}

console.log(lastletter("mark"));