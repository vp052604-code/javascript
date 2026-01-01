const marvel_heros =["thor","ironman","spiderman"]
const dc =["superman","flash","datman"]

// marvel_heros.push(dc)
// console.log(marvel_heros) //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'datman' ] ]
// console.log(marvel_heros[3][1])//flash

// const allHeros = marvel_heros.concat(dc)
// console.log(allHeros)  //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'datman' ]

// const all_new_Heros = [...marvel_heros, ...dc]
// console.log(all_new_Heros) //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'datman' ]

const anothor_arrary =[1,2,3,[4,5,6],7,8,[1,3,4,[2,4,5]]]
const real_anothor_arrary = anothor_arrary.flat(Infinity)
console.log(real_anothor_arrary)


// console.log(Array.isArray("vishnu"));//false is not array
// console.log(Array.from("vishnu"));  //[ 'v', 'i', 's', 'h', 'n', 'u' ]
// console.log(Array.of("vishnu"));  //[ 'vishnu' ]

// console.log(Array.of({name :"vishnu"})); 
const as= (Array.of({name :"vishnu"})); 
console.log(as)

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]