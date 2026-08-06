
// <----------ForEach method------------->

// const number = [10,20,30,40,50]

// for(let i = 0; i< number.length; i++) {
//   console.log(number[i])
// }
    // Function Declaration

// number.forEach(function print(num,idx,arr){
// console.log("num is", num, "index is", idx, "array is", arr)
// })
// number.forEach (print)
// function print(num,idx,arr){
// console.log("num is", num, "index is", idx, "array is", arr)
// }

// function expression

// const print = function print(num,idx,arr){
// console.log("num is", num, "index is", idx, "array is", arr)
// }
// number.forEach(print)

// Anonymous function

// number.forEach(function (num,idx,arr){
// console.log("num is", num, "index is", idx, "array is", arr)
// })

// Arrow function

// number.forEach((num, idx, arr) => {
// console.log("num is", num, "index is", idx, "array is", arr)
// })

// <-----------map method------------->2

// const number = [10,20,30,40,50]
// // number.map(function sum (num,idx,){
// //     return num+=2
// // })
// // console.log(sum)
// const numberincreasebytwo = number.map((num) => num*num*num)
// console.log(numberincreasebytwo)

// const user = [
//     {
//         id:1,
//         name:"Amit bhdana",
//         salary: 10000
//     },
//     {
//         id:2,
//         name:"Rohit sahoo",
//         salary: 20000
    
//     },
//     {
//         id:3,
//         name:"Ramesh jena",
//         salary: 30000
//     },
//     {
//         id:4,
//         name:"Suresh swain",
//         salary: 40000
//     }
// ]
// const result = user.map((value) => {
//     return{
//         id: value.id,
//         name: value.name.split(" ")[0],
//         bonous: value.salary * 0.1
//     };

// });
// console.log(result)
// ==================filter method====================

// let number = [11,10,100,54]
// const divisiblebyten = number.filter((value,index,arr) => (value % 10 ===0))
//     //
//   //

// console.log("divisible by ten", divisiblebyten)
// const users = [
//   { id: 1, name: "Amit", isActive: true },
//   { id: 2, name: "Rahul", isActive: false },
//   { id: 3, name: "Neha", isActive: true }
// ];
// const activeUsers = users.filter((user) => user.isActive);
// console.log("Active users:", activeUsers);



// const usernames = users.map((user) => user.name);
// console.log("Usernames:", usernames);

//  const products = [
//    { id: 1, name: "Laptop", price: 50000 },
//    { id: 2, name: "Mobile", price: 20000 },
//    { id: 3, name: "Tablet", price: 30000 }
//  ];
//  const pricefilter = products.filter((products) => products.price > 25000).map((products) => products.name)
//  console.log("product with price > 25000 is:",pricefilter)

// const students = [
//   { name: "A", marks: 80 },
//   { name: "B", marks: 45 },
//   { name: "C", marks: 60 }
// ];

// const passstudents = students.map((student) => {
//     return {
//         name: student.name,
//         marks: student.marks,
//         result: student.marks >= 50 ? "Pass" : "Fail"
//     }
// });
// console.log("students with result:",passstudents)

//========================= some function============================
// const numbers = [10,20,25,30]
// const isAnyOddPresent = numbers.some(num => num % 2 == 1)
// console.log("\\\\\\is anyoddpresent",isAnyOddPresent)

// const isanyevenpresent = numbers.every(num => num % 2== 0)
// console.log(isanyevenpresent)

// const products = [
//     { id: 1, name: "Laptop", price: 50000 },
//     { id: 2, name: "Mobile", price: 20000 },
//    { id: 3, name: "Tablet", price: 30000 }
// ];
// const pricecompair = products.some(products => products.price > 40000)
// console.log("\\\\\\price above 40000 is ",pricecompair);

// const pricecompairfor = products.every(products => products.price > 40000)
// console.log("\\\\\\price above 40000 is ",pricecompairfor);

// const users = [
//   { id: 1, name: "Amit", isActive: true },
//   { id: 2, name: "Rahul", isActive: false },
//   { id: 3, name: "Neha", isActive: true }
// ];

// const activeuser = users.every(users => users.isActive)
// console.log(activeuser);

// const activeuserfor = users.some(users => users.isActive)
// console.log(activeuserfor     );

//==============================find function==================================
// const num =[10,25,45,63,22]

// const number = num.find(num => num == 45)
// console.log("is 41 found",number)

// const numberfor = num.findIndex(num => num == 41)
// console.log("is 41 found",numberfor)


// const products = [
//     { id: 1, name: "Laptop", price: 50000 },
//     { id: 2, name: "Mobile", price: 20000 },
//    { id: 3, name: "Tablet", price: 30000 }
// ];

// const findproduct = products.find(products => products.id == 2)
// console.log(findproduct)

// const find = products.findIndex(products => products.id == 2)
// console.log(find)

// const students = [
//   { name: "A", marks: 80 },
//   { name: "B", marks: 45 },
//   { name: "C", marks: 60 }
// ];
// const findpila = students.find(students => students.name == "C")
// console.log(findpila)

// const findpilaFOR = students.findIndex(students => students.name == "C")
// console.log(findpilaFOR)

//======================= reduce method =====================================

// const numbers=[10,12,15,18,25]
// const findnum =numbers.reduce((total,value,index) =>{
//     return total*=value
// },)
// console.log(findnum)

const users = [
    {
        id: 1,
        name: "sarthak",
        age:20
    },
    {
        id: 2,
        name: "amit",
        age:26
    },
    {
        id: 3,
        name: "nikhil",
        age: 28
    }

]

const totalage = users.reduce((prev, curr) => prev + curr.age, 0)
console.log("total age ", totalage)
console.log("average age",totalage/users.length)