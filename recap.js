
// variable
var bookName = 'the bangli';

// array 
var bookList = ['bangli', 'english', 'math', 'economics'];

// array index defind
var bookList = ['bangli', 'english', 'math', 'economics'];
var mathIndex = bookList.indexOf('math');

bookList[1] = 'The earth';
bookList.unshift('geography');
bookList.push('The world');
bookList.pop();
bookList.shift();
console.log(bookList);



// conditionals

if(bookList[2] == 'math'){
    console.log('Yes this is math')
}
else{
    console.log('this is not math')
}


// loop 
// while
var i = 1;
while(i <= 5){
    console.log('answer is', i);
    i++;
}

// for loop
for(i = 1; i <= 5; i++){
    console.log('for ans is', i);
}



