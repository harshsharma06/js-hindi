//object literals
const mysym= Symbol("key1");
const myobj={
    name: "harsh ",
    "my fullname":"harsh sharma",
    [mysym]:"mykey1",
    age: 20,
    location: "mathura",
    email:"harsh@google.com",
    lastlogin:["monday","tuesday"]

}
// console.log(myobj.lastlogin)
// console.log(myobj["email"])
// console.log(myobj["my fullname"])
// Object.freeze(myobj);==> freeze the value of object elements
// console.log(myobj[mysym]);

//function in objects

myobj.greeting=function(){
    console.log("hellow js user")
}
myobj.greeting2=function(){
    console.log(`hello JS user ${this["my fullname"]}`);
}
console.log(myobj.greeting())
console.log(myobj.greeting2())
  
