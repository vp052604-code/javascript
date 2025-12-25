const myarray=[1,2,3,4,5];
console.log(myarray);

const myarray2 =new Array(6,7,8,9,10);
// console.log(myarray2[2]); //8

//Array Metheds

// myarray.push(11) //add 11
// myarray.pop()//remove last element
// myarray.unshift(12)//add 12 at start
// myarray.shift()//remove first element
// console.log(myarray); 

// console.log(myarray.includes(3));// true
// console.log(myarray.includes(23));// false
// console.log(myarray.indexOf(4));//3
// console.log(myarray.indexOf(23));//-1

//slice ,splice

const myn1 =myarray.splice(1,3);
console.log("A",myn1);//A [ 2, 3, 4 ]

const myn2 =myarray.slice(1,3)
console.log(myn2);//[ 5 ]