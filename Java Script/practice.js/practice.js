// const numbers = [10, 25, 7, 45, 18];

// function findlarge(arr) {
//   let largest = arr[0];
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] > largest) {
//       largest = arr[i]
//     }
//   }
//   return largest
// }
// console.log(findlarge(numbers));

// const numbers = [10, 25, 7, 45, 18];

// function findsmall(arr) {
//   let smallest = arr[0]
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] < smallest){
//       smallest = arr[i]
//     }
//   }
//   return smallest
// }
// // console.log(findsmall(numbers))

// const numbers = [10, 20, 30, 40];

// function finddsum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++){
//     sum+=arr[i]
//   }
//   return sum
// }
// console.log(finddsum(numbers))

// const numbers = [10, 15, 22, 31, 40, 55];

// function counteven(arr) {
//   let even =0
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0) {
//       console.log(arr[i])
//       even++
       
//     }
//   }
//  return even
// }
// console.log(counteven(numbers))

// const numbers = [1, 2, 3, 4, 5];
// function revnum(arr) {
//   let rev = [];
//   let j = 0;
//   for (let i = arr.length - 1; i >= 0; i--){
//     rev[j] = arr[i]
//     j++
//   }
//   return rev
// }
// console.log(revnum(numbers))

// const numbers = [10, 20, 30, 40];

// function findnum(arr) {
//   let index = 0;
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] === 30) {
//       index = i
//     }
//   }
//   return index
// }
// console.log("is in index position of ",findnum(numbers))

// const numbers = [10, 20, 30, 40, 50];

// function countavg(arr) {
//     const findsum = numbers.reduce((result, value) => result += value)
//     return findsum/arr.length
// }
// const average = countavg(numbers);
// console.log(average)

// const numbers = [10, 20, 10, 30, 20, 40];

// const removeduplicate = numbers.filter((value, index) => numbers.indexOf(value) === index)
// console.log(removeduplicate);

// const numbers = [1, 2, 3, 4, 5];
// const sqr = numbers.map((value) => value * 2)
// console.log(sqr)

// const numbers = [20, 65, 40, 80, 90, 30];

// const great = numbers.filter((values) => values > 50)
// console.log(great)

// const students = [
// { id: 1, name: "Amit" },
// { id: 2, name: "Rahul" },
// { id: 3, name: "Neha" }
// ];

// const fstd = students.find((students) => students.id === 2)
// console.log(fstd)

// const employees = [ 
// { name: "Amit", salary: 25000 }, 
// { name: "Rahul", salary: 30000 }, 
// { name: "Neha", salary: 35000 } 
// ];


// const totalsalry = employees.reduce((total, employee) => total + employee.salary)
// console.log(totalsalry)


const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);

console.log(totalSalary); 