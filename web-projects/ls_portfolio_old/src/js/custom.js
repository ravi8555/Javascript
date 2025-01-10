// console.log("Cutom JS");

const arr1 = ["one", "two", "String", false, true, 1, 2 ];
arr1[2] = "test";
// console.log(arr1[2]);
// console.log(arr1);

const arr2 = arr1;
// console.log(arr2);
arr2[4] = "New word";
// console.log(arr1);
// console.log(arr2);


const arr3 = [];
arr1.forEach((ele, inx) =>{
    // console.log(ele);
    arr3[inx] = ele
})
// console.log(arr3);
arr3[4] = "chnaged Word";
// console.log(arr3);

arr1.push("New Val");
// const val1 = arr1.pop();
// const val2 = arr1.shift()
// console.log(val1, val2);

const arr4 = arr1.map((el)=>{
    // console.log(el);
    return el;
})
// console.log(arr4);

// clone the array
const arr5 = arr1.map((x) => x)
// console.log(arr5);


const person = {
    "firstName" : "Ravindra",
    "lastName"  : "Dhadave",
    "x1"        :  "One",
    "x2"        : "Two",
    "Interest"  : ["Javascript","Jquery","Ajax","Json","SCSS"],
    "Courses"   :[{
        "Name"      : "Javascript",
        "length"    : 15    
    },
    {
        "Name"      : "Jquery",
        "length"    : 20    
    },
    {
        "Name"      : "Ajax",
        "length"    : 10    
    },
    {
        "Name"      : "Json",
        "length"    : 15    
    },
    {
        "Name"      : "SCSS",
        "length"    : 9    
    }]

}

// console.log(person);
let x = 1;
// console.log(person["x1"]);
// dynamic
// console.log(person["x"+x]);
x++
// console.log(person["x"+x]);
// console.log(person["Courses"][0]["length"]);

const Courses = person["Courses"];
Courses.forEach((crs, idx) =>{
    // console.log(crs);
    // console.log(crs.Name);

})
for( const pro in person){
    // console.log(pro);
}

const keys = Object.keys(person);
// console.log(keys);

keys.forEach((key)=>{
    // console.log(person[key]);
})

const vals = Object.values(person);
// console.log(vals);

vals.forEach((va)=>{
    // console.log(va);
})

const entries = Object.entries(person);
// console.log(entries);

for(const ent of entries){
    // console.log(ent);
    console.log(ent[0]);
    console.log(ent[1]);
}

