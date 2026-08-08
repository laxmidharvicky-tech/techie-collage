const employee = { 
    id: 101,
    name: "vicky",
    age: 27,
    salary: 25000.00
    
}
function handleupdate(target) {
    const {name, value} = target
    employee [name ]= value
}
handleupdate({ name: "age", value: 28 })
handleupdate({ name: "id", value: 182 })
handleupdate({name:"salary", value:30000.00})