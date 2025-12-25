const myDate= new Date()
// console.log(myDate)
// console.log(myDate.getTime())
// console.log(myDate.toISOString()); //2025-12-23T04:39:24.206Z
// console.log(myDate.toDateString());  //Tue Dec 23 2025
// console.log(myDate.toLocaleDateString()); //23/12/2025

// const mycreateDate = new Date(2025,0,1) 
// console.log(mycreateDate.toDateString()); //Wed Jan 01 2025 

// const mycreateDate = new Date(2025,0,1,5,7)
// console.log(mycreateDate.toLocaleString());// 1/1/2025, 5:07:00 am

// const mycreateDate = new Date('01-92-2025')
// console.log(mycreateDate.toLocaleString());// Invalid Date

const mycreateDate = new Date('01-12-2025')
console.log(mycreateDate.toLocaleString());  // 12/1/2025, 12:00:00 am