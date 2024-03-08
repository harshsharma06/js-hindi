//syntax==>   function func_name(){code}
function saymyname(){
    console.log("H")
    console.log("A")
    console.log("R")
    console.log("S")
    console.log("H")
}

// saymyname();

function addtwonumbers(num1,num2){
    const result=num1+num2;
    return result;
}

const result=addtwonumbers(2,3);
// console.log(result);

function login(username){  //undefined==>false
    if(!undefined){
        console.log("please enter a username")
        return;
    }
    return `${username} just logged in`
}

// let info=login()
// console.log(info)


function calculatecart(val1, val2,...num){   //rest operator
    return num;
}
// console.log(calculatecart(100,200,400,500,100))
let arr=calculatecart(100,200,400,500,100);
// console.log(arr[0]);


const user={
    name:"harsh sharma",
    age:20
}
function handleobj(objname){
    console.log(`username is ${objname.name} and his age is ${objname.age}`)
}

handleobj(user);