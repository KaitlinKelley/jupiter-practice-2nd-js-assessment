"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 */


//TODO: Define a function named isOdd that takes in any input and returns true if the input is an odd number, return false for any other situation. You do not need to consider floating-point and decimal numbers.

function isOdd(input){
    return input % 2 === 1;
}

//TODO: Define a function named isVowel that takes in a single character and returns true if the character is a vowel. *Not including the letter 'y'

function isVowel(input){
    if(input === "a"||input === "e"||input === "i"||input === "o"||input === "u"||input === "A"||input === "E"||input === "I"||input === "O"||input === "U"){
        return true;
    } else {
        return false;
    }
}

//TODO: Define a function named combineStrings that takes in two parameters, if both parameters are strings, then return a concatenated string of both parameters. Otherwise, return false.

function combineStrings(input1, input2){
    if(typeof input1 === "string" && typeof input2 === "string"){
        return input1 + input2;
    } else {
        return false;
    }
}


//TODO: Define a function named sumArgs that takes in three parameters, if they are numbers then add them together. Otherwise return false.

function sumArgs(input1, input2, input3){
    if(typeof input1 === "number" && typeof input2 === "number" && typeof input3 === "number"){
        return (input1 + input2 + input3);
    } else return false;
}



//TODO: Define a function named truncateString that takes in a string as the first parameter and a number as the second parameter. Truncate (shorten) the string by the length based on the argument passed in. For example, truncateString("hello world",1) would return "hello worl"

function truncateString(inputString, inputNum) {
    if (inputString.length <= inputNum){
        return "";
    } else if (typeof inputString === "string" && typeof inputNum === "number"){
        return inputString.slice(0, inputString.length - inputNum);
    } else {
        return false;
    }

}


//TODO: Define a function named `reverseSign` that takes in a number as the first parameter. Reverse the sign of the argument passed in, return false if the argument is not a number. For example, `reverseSign(1)` would return `-1`.

function reverseSign(input){
    if (input === ""|| typeof input === "boolean" || typeof input === "object"){
        return false;
    } else if (typeof (Number(input)) !== "number"){
        return false;
    } else if(Number(input)) {
        return (input * (-1));
    } else {
        return false;
    }
}


//TODO: Define a function named `makeUppercase` that takes in a string as the first parameter. Return the argument passed in entirely uppercased, return false if the argument is not a string. For example, `makeUppercase("test")` would return `"TEST"`.

function makeUppercase(input){
    if (typeof input === "string" && isNaN(input)){
        return input.toUpperCase();
    } else {
        return false;
    }
}


//TODO: Define a function named `isMultiple` that takes in two `number` parameters. Return `true` if one argument is a multiple of the other, `false` otherwise. For example, `isMultiple(2, 6)` would return `true`.

function isMultiple(num1, num2){
    if(num1 === num2){
        return false;
    } else if (num1 % num2 === 0 || num2 % num1 === 0){
        return true;
    } else {
        return false;
    }
}


//TODO: Define a function named `canPurchase` that takes in two `number` parameters, `billAmount` & `availableCash`. Return `true` if `availableCash` is greater than `billAmount`, `false` otherwise. For example, `canPurchase(10, 20)` would return `true`.

function canPurchase(billAmount, availableCash){
    return parseFloat(availableCash) > parseFloat(billAmount);
}


//TODO: Define a function named `getInitials` that takes in two `string` parameters, `first` & `last`. Return the names combined and formatted as initials, return `false` if either parameter is invalid. For example, `getInitials("John", "Snow")` would return `"J.S."`

function getInitials(first, last) {
    if (typeof first === "string" && typeof last === "string" && isNaN(first) && first.length > 0 ) {
        return first.substring(0, 1) + "." + last.substring(0, 1) + ".";
    } else {
        return false;
    }
}
