// const tinderuser=new Object()  ==>singelton object
// const tinder = {}   ==> literal object

//===========object nesting===========

const regularuser={
    email:"harsh@gmail.com",
    fullname:{
        username:{
            firstname:"harsh",
            lastname:"Sharma"
        }
    }
}
// console.log(regularuser.fullname.username.firstname)

//merging of two objects

const target ={1:"a",2:"b"};
const source={2:"harsh",4:"b"};
const obj3=Object.assign({},target,source);// copies the source object to targeted object

const newobj={...target,...source};
// console.log(obj3)
// console.log(newobj);


// console.log(Object.keys(regularuser));
// console.log(Object.values(regularuser));
// console.log(Object.entries(regularuser));

// console.log(regularuser.fullname.username.hasOwnProperty('firstname'));

//destructuring of objects

const Course={
    name:"js-hindi",
    price:"999",
    course_teacher:"hitesh sir"
}
const {course_teacher:teacher}=Course

console.log(teacher)
