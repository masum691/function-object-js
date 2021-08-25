

var computer = {
    price: 59000,
    storage: '2tb',
    processor: 'Intel core i 5'
}

// change properties value
computer.price = 44000;

// read properties
console.log(computer.processor);
var computerPrice = computer.price;
console.log(computerPrice);


// different ways to set a value of an object property
computer.price = 33000;
console.log(computer.price);
computer['price'] = 88000;
console.log(computer.price);

var priceProperty = 'price';
computer[priceProperty] = 12000;
console.log(computer.price)









////////////////////////////////////////////////////////

var myFriend = {
    name: 'Abdur Rahim',
    class: 12,
    roll: 02,
    height: 5.9,
    color: 'Medium-White',
}

console.log(myFriend);
// console.log(myFriend.roll)
var classRoll = myFriend.height;
console.log(classRoll);

// myFriend['height'] = 6.1;
// console.log(myFriend.height);
var hisHeight = 'height';
myFriend[hisHeight] = 7.8;
console.log(myFriend.height)



