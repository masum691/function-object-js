

// var i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
//     if(i==5){
//         console.log('break')
//         break;
//     }
// }


// for(var i = 0; i < 10; i++){
//     console.log('Number printing', i);
//     if(i==4){
//         break;
//     }
// }


// var numbers = [33, 44, 55, 334, 67, 75, 35, 75];
// for(var i = 0; i< numbers.length ; i++){
//     var number = numbers[i];
//     console.log(number);
//     if(number < 100){
//         break;
//     }
// }


var numbers = [33, 44, 55, 334, 67, 75, 444, 35, 75];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number < 100){
        continue;
    }
    console.log(number);
}

