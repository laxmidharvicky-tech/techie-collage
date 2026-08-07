// let arr = [10, 20, 30, 40];

// let findsum = arr.map((value) => value + value)
// console.log(findsum)
// const numbers = [5, 10, 15, 20];

// const num = numbers.map((value) => value * 2)
// console.log(num)

// const users = [
//   { id: 1, name: "Amit", age: 22 },
//   { id: 2, name: "Rahul", age: 25 },
//   { id: 3, name: "Priya", age: 21 },
//   { id: 4, name: "Neha", age: 24 }
// ];

// const onlyname = users.map((users) => users.name)

// console.log(onlyname)

// const employees = [
//   { id: 1, name: "John", salary: 30000 },
//   { id: 2, name: "Sara", salary: 45000 },
//   { id: 3, name: "David", salary: 50000 },
//   { id: 4, name: "Emma", salary: 60000 }
// ];
// const addbonous = employees.map((employees)=> {
//   return {
//     id: employees.id,
//     name: employees.name,
//     salary: employees.salary,
//     bonous:employees.salary*.2
//   }
// })
// console.log(addbonous)

// const numbers = [10, 25, 30, 15, 45, 5, 60];
// const filtnum = numbers.filter((values) => values > 20)
// console.log(filtnum)

// const students = [
//   { id: 1, name: "Amit", marks: 45 },
//   { id: 2, name: "Rahul", marks: 78 },
//   { id: 3, name: "Neha", marks: 50 },
//   { id: 4, name: "Priya", marks: 39 },
//   { id: 5, name: "Ankit", marks: 91 }
// ];

// const filtmark = students.filter((students) => students.marks >= 50)
// console.log(filtmark)

// const products = [
//   { id: 1, name: "Mouse", price: 700 },
//   { id: 2, name: "Keyboard", price: 1500 },
//   { id: 3, name: "Monitor", price: 12000 },
//   { id: 4, name: "USB Cable", price: 300 }
// ];

// const prodprice = products.filter((products) => products.price > 1000)
// console.log(prodprice)

// const numbers = [4, 8, 12, 18, 24, 30];

// const findnum = numbers.find((values) => values == 18)
// console.log(findnum)

// const users = [
//   { id: 1, name: "Amit" },
//   { id: 2, name: "Rahul" },
//   { id: 3, name: "Neha" },
//   { id: 4, name: "Priya" }
// ];

// const findid = users.find((users) => users.id == 3)
// console.log(findid)

// const books = [
//   { id: 1, title: "Java" },
//   { id: 2, title: "Python" },
//   { id: 3, title: "JavaScript" },
//   { id: 4, title: "C++" }
// ];
// const booktitl = books.find((books) => books.title == "Python")
// console.log(booktitl)

// const colors = ["Red", "Blue", "Green", "Yellow", "Black"];
// const findind = colors.findIndex((colors) => colors == "Green")
// console.log(findind)

// const students = [
//   { name: "A" },
//   { name: "B" },
//   { name: "C" },
//   { name: "D" }
// ];
// const findstu = students.findIndex((students) => students.name == "B")
// console.log(findstu)

// const products = [
//   { id: 10, name: "Laptop" },
//   { id: 11, name: "Tablet" },
//   { id: 12, name: "Phone" },
//   { id: 13, name: "Watch" },
//   { id: 14, name: "Camera" }
// ];
// const findpro = products.findIndex((products) => products.id == 13)
// console.log(findpro)

// const numbers = [2, 4, 6, 8, 11, 14];
// const chkodd = numbers.some((values) => values % 2 == 1)
// console.log(chkodd)

// const students = [
//   { name: "Amit", marks: 75 },
//   { name: "Rahul", marks: 32 },
//   { name: "Neha", marks: 67 },
//   { name: "Priya", marks: 55 }
// ];
// const stupass = students.some((students) => students.marks < 50 )
// console.log(stupass)

// const users = [
//   { id: 1, name: "Amit", active: false },
//   { id: 2, name: "Rahul", active: false },
//   { id: 3, name: "Neha", active: true },
//   { id: 4, name: "Priya", active: false }
// ];
// const useract = users.some((users) => users.active)
// console.log(useract)

// const numbers = [2, 4, 6, 8, 10];
// const chkeven = numbers.every((values) => values % 2 == 0)
// console.log(chkeven)

// const students = [
//   { name: "Amit", marks: 65 },
//   { name: "Rahul", marks: 80 },
//   { name: "Neha", marks: 55 },
//   { name: "Priya", marks: 72 }
// ];
// const passstu = students.every((students) => students.marks > 50)
// console.log(passstu)

// const users = [
//   { id: 1, name: "Amit", active: true },
//   { id: 2, name: "Rahul", active: true },
//   { id: 3, name: "Neha", active: true },
//   { id: 4, name: "Priya", active: true }
// ];

// const eckect = users.every((users) => users.active)
// console.log(eckect)

// const products = [
//   { id: 1, name: "Laptop", price: 55000 },
//   { id: 2, name: "Keyboard", price: 2000 },
//   { id: 3, name: "Phone", price: 30000 },
//   { id: 4, name: "Mouse", price: 700 },
//   { id: 5, name: "TV", price: 45000 }
// ];
// const pro = products.filter((products) => products.price > 20000).map((products) => products.name)
// console.log(pro)
const students = [
  { name: "Amit", marks: 78 },
  { name: "Rahul", marks: 42 },
  { name: "Neha", marks: 90 },
  { name: "Priya", marks: 36 },
  { name: "Ankit", marks: 55 }
];
const result = students.map((students) => {
  return {
    name: students.name,
    result: students.marks >= 50 ? "pass" : "fail"
}
})
console.log(result)