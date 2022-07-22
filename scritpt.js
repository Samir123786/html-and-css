const btn = document.getElementById("btn");
const box = document.querySelector(".box");


const button1= document.createElement("button")
const button2= document.createElement("button")
const button3= document.createElement("button")
const button4= document.createElement("button")
const button5= document.createElement("button")


btn.addEventListener("click",()=>{
box.append(button1);
button1.style.fontSize="3rem"
button1.style.color="red"
button1.style.backgroundColor="blue"
button1.style.padding="8px 80px"
button1.style.cursor="pointer"
button1.innerText="Go Next"
button1.style.margin="30px"

})
button1.addEventListener("click",()=>{
box.append(button2);
button2.style.fontSize="3rem"
button2.style.color="red"
button2.style.backgroundColor="white"
button2.style.padding="8px 80px"
button2.style.cursor="pointer"
button2.innerText="Go Next"
button2.style.margin="30px"

})
button2.addEventListener("click",()=>{
box.append(button3);
button3.style.fontSize="3rem"
button3.style.color="red"
button3.style.backgroundColor="yellow"
button3.style.padding="8px 80px"
button3.style.cursor="pointer"
button3.innerText="Go Next"
button3.style.margin="30px"

})
button3.addEventListener("click",()=>{
box.append(button4);
button4.style.fontSize="3rem"
button4.style.color="red"
button4.style.backgroundColor="darkblue"
button4.style.padding="8px 80px"
button4.style.cursor="pointer"
button4.innerText="Go Next"
button4.style.margin="30px"

})
button4.addEventListener("click",()=>{
box.append(button5);
button5.style.fontSize="3rem"
button5.style.color="red"
button5.style.backgroundColor="cream"
button5.style.padding="8px 80px"
button5.style.cursor="pointer"
button5.innerText="Go Next"
button5.style.margin="30px"

})