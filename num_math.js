const  score=400
// console.log(score);

const Balance= new Number(100)
// console.log(Balance);

// console.log(Balance.toString().length)  //3
// console.log(Balance.toFixed(3))  //100.000
// console.log(Balance.toPrecision(5))  //100.00

const pnum=10000
// console.log(pnum.toLocaleString()) //10,000

// ===================math==================
// console.log(Math)
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.6)); //5
// console.log(Math.round(4.2)); //4
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(4,9,4,2,1)); //1
// console.log(Math.max(4,9,1,2));  //9

console.log(Math.random()); //0.7080397615616949
console.log((Math.random()* 10) +1); //3.7442091764386767
console.log(Math.floor((Math.random()*10)+1)); //3

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min * 1)* min));//50 xyz