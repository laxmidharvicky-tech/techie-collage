//function declaration.

function greet() {
    console.log("hello");
}
greet();

//2

function fullname(str){
    console.log(str);
}
fullname("vicky");

//3

function number(num){
console.log(num);
}
number(22);

//Arithmetic function
//4

function sum(a,b){
    let s = a+b;
    console.log(s);
}
sum(5,4);
//5

function sub (a,b){
const v = a-b;
console.log(v);
}
sub(25,22);
//6
function unary(a){
    let x = ++a;
    console.log(x);
}
unary(5);

//loop & condition function
//6

function even(num){
    if (num % 2 ==0){
        console.log(num,"is even");
    }else{
        console.log(num,"is an odd");
    }
}
even(5);

//7

function odd(num){
     if (num % 2 !=0){
        console.log(num,"is an odd");
    }else{
        console.log(num,"is even");
    }
}
odd(4);

//8

function checkeven (range){
    for(let i = 0 ; i<range ; i++){      
          if(i % 2 == 0){
           console.log("even numbers are:",i);
        }
    }
 }
 checkeven(100);

//9

function checkvowl(str){
    let count = 0;
    for(const chr of str){
        if (chr==="a"||chr === "e" || chr ==="i" || chr==="o" || chr==="u"){
            count++;
        }
    }
    console.log(count);
}
checkvowl("laxmidhar");

//10
 
function sum(a,b){
    s = a+b;
    return s;
}
let x = sum(5,3);
console.log(x);

//11

function java(str){
    console.log(str,"i love java");
}
java("hii");

//12 arrow function

let sumtotal = (a,b)=>{
   return a+b;
}
console.log(sumtotal(20,10));

//13 IIEF

(function (str){
    console.log("welcome",str);
})
("laxmidhar");
 
//14

(function(num){
    console.log("my number is",num);
})
(7077091633)

//15

 let divisible = (num) => {
    if (num % 2 == 0) {
        console.log(num, "is even");
    } else {
        console.log(num, "is odd");
    }

    return num;
};

let z =(divisible(23));
console.log(z);