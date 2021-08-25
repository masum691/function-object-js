
// variable

// array 
var phones = ['iphone', 'samsung', 'htc', 'realme'];
phones[3] = 'walton';
var indexNum = phones.indexOf('samsung');

console.log(indexNum)
console.log(phones)

// check oppo exists in an array

if(phones.indexOf('oppo') == -1){
    console.log('I am finding oppo');
}
else{
    console.log('nothing found')
}


if(phones.indexOf('samsung') != -1){
    console.log('samsung is available');
}
else{
    console.log('nothing');
}


// loop 
var num = 8;
while(num < 300){
    num++;
}

// for loop 


// function
function addThreeNumbers(numOne, numTwo, numThree){
    console.log('Number is', numOne, numTwo, numThree);
    var totalNum = numOne + numTwo + numThree;
    return totalNum;
}
var num1 = 44;
var num2 = 54;
var num3 = 64;
var resultNumber = addThreeNumbers(num1, num2, num3);
console.log('Result is ', resultNumber);


for(let i = 10; i >= 1; i--){
    console.log(i);
}