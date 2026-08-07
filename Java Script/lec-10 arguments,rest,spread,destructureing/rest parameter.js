// function fun() {
//     console.log("argumentss", arguments)
    
//     console.log(arguments[0])
//     console.log(arguments[2])

//     for (let i = 0; i < arguments.length; i++){
//         console.log(arguments[i])
//     }
// }
// fun(10, "31", true,10,25)


     const fun = (...others) => {
    // console.log("argumentss", arguments)
    
    // console.log(arguments[0])
    // console.log(arguments[2])

    // for (let i = 0; i < arguments.length; i++){
         //     console.log(arguments[i])
         
         console.log("others", others)
         for (let i = 0; i < others.length; i++) {
             console.log(others[i])
         }
         others.forEach((el) => console.log(el))
    }

fun(10, "31", true,10,25)

