// singleton
// Object literals

const mySym =Symbol("key1")

const jsUser={
    name:"vishnu",
    "full name":"vishnu prajapati",
    // mySym:"mykey1",
    [mySym]:"mykey1",
    age:20,
    location: "surat",
    email:"vishnu@2314.com",
    lastlogindays:["monday","saturday"]
}
// console.log(jsUser.name); //vishnu
// console.log(jsUser["name"]);//vishnu
// console.log(jsUser["full name"]);//vishnu prajapati

// console.log(jsUser.mySym)
// console.log(typeof jsUser.mySym);//typrof string

// console.log(jsUser[mySym])
// console.log(typeof jsUser[mySym]);// [Symbol(key1)]: 'mykey1'


// jsUser.email="vishnu@.com" //change email
// console.log(jsUser);
// // Object.freeze(jsUser)
// jsUser.email="vishnu@0000.com"
// console.log(jsUser);

// function

// jsUser.greeting = function(){
//     console.log("hello jsuser")
// }
// console.log(jsUser.greeting());//hello jsuser

// jsUser.greetingTwo = function(){  //**** */
//     console.log('hello jsuser,${this.name}');
// }
// console.log(jsUser.greetingTwo());


// jsUser.greetingTwo = function () {
//     return `hello jsuser, ${this.name}`;
// };
// console.log(jsUser.greetingTwo());//hello jsuser, vishnu
