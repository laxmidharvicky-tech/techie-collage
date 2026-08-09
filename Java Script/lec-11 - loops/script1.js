let student = {
  name: "Amiya",
  age: 20,
  course: "BCA"
};

//  console.log(Object.keys(student))

// for (let key of Object.keys(student))
//   console.log(key)

let a = Object.values(student)
console.log(a)
Object.values(student).forEach((value) => console.log(value))