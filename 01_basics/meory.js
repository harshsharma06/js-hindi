let myemail="harsh@google.com"
let anotherEmail= myemail   //memory located in stack
anotherEmail="harshsharma@gmail.com"

console.log(myemail)
console.log(anotherEmail)

let userone={
    email:"user@123",
    salary:1000

}
let usertwo=userone

usertwo.email="user123google.com"  // memory located in heap

console.log(userone.email)
