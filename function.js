// function addtwonumber(number1,number2) {
//     console.log(number1+number2)
// }
// addtwonumber(11,2)

// function addtwonumber(number1,number2) {
//     console.log(number1+number2)
// }

// function addtwonumber(number1,number2) {
//     let result = number1 + number2
//      console.log("vishnu"); //print vishnu
//     return result
//     //console.log("vishnu");  //no print
// }
// const result = addtwonumber(12,2)
// console.log("result:",result)//14

function addtwonumber(number1,number2) {
    return number1 + number2
}
const result = addtwonumber(12,2)
// console.log("result:",result)//14


function loginuserMessage(username) {
    if(username === undefined){
        console.log("enter the name");
        return
    }
    return `${username} just logged in`  //``
}
console.log(loginuserMessage())
