//function declaration.
function hello(){
    console.log("Hello World");
}

function greet (a,b){
    console.log(a);
    b();
}
greet("good mornig",hello)