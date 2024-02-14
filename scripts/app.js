let bigBody = document.getElementById("bigBody");
let ten = document.getElementById("ten");
let twenty = document.getElementById("twenty");
let thirty = document.getElementById("thirty");
let forty = document.getElementById("forty");
let fifty = document.getElementById("fifty");
let eyeD = document.getElementById("eyeD");
let first = document.getElementById("first");
let last = document.getElementById("last");
let height = document.getElementById("high");
let age = document.getElementById("age");
let prev = document.getElementById("prev");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let next = document.getElementById("next");

let counter = 0;
let page1 = 10;
let page2 = 20;
let page3 = 30;
let page4 = 40;
let page5 = 50;



const getData = async () =>{
    const promise = await fetch("../data/data.json")
    const data = await promise.json();
    return data.People;
}


const populate = async () =>{
    let people = await getData();

   for(let i=0; i < page1; i++){

       let col = document.createElement("div");
       col.className = "col-2";
   
       let col2 = document.createElement("div");
       col2.className = "col-2";
   
       let col3 = document.createElement("div");
       col3.className = "col-2";
   
       let col4 = document.createElement("div");
       col4.className = "col-2";
   
       let col5 = document.createElement("div");
       col5.className = "col-2";
   
       let col6 = document.createElement("div");
       col6.className = "col-2";
   
       let p1 = document.createElement("p");
       let p2 = document.createElement("p");
       let p3 = document.createElement("p");
       let p4 = document.createElement("p");
       let p5 = document.createElement("p");
       let p6 = document.createElement("p")
   
       p1.textContent = people[i].Id;
       p2.textContent = people[i].FirstName;
       p3.textContent = people[i].LastName;
       p4.textContent = people[i].Email;
       p5.textContent = people[i].Height;
       p5.className = "text-center";
       p6.textContent = people[i].Age;
       p6.className = "text-center"
   
       col.append(p1);
       col2.append(p2);
       col3.append(p3);
       col4.append(p4);
       col5.append(p5);
       col6.append(p6);
   
       bigBody.append(col);
       bigBody.append(col2);
       bigBody.append(col3);
       bigBody.append(col4);
       bigBody.append(col5);
       bigBody.append(col6);
   }
}

populate();

ten.addEventListener("click", () =>{
    populate()
})
twenty.addEventListener("click", () =>{

})
thirty.addEventListener("click", ()=>{

})
forty.addEventListener("click", ()=>{

})
fifty.addEventListener("click", ()=>{

})


eyeD.addEventListener("click", ()=>{

})
first.addEventListener("click", ()=>{

})
last.addEventListener("click", ()=>{

})
height.addEventListener("click", ()=>{

})
age.addEventListener("click", ()=>{

})



prev.addEventListener("click", ()=>{

})
one.addEventListener("click", ()=>{

})
two.addEventListener("click", ()=>{

})
three.addEventListener("click", ()=>{

})
next.addEventListener("click", ()=>{

})