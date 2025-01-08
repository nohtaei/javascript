
const colorButton = document.querySelector("#alert-button")
colorButton.addEventListener("click", ()=>{alert("클릭!")
    document.body.style.backgroundColor = "hotpink";
})

let myButton2 = document.querySelector("#un-button")

myButton2.addEventListener("click", ()=>{alert("응애")} )

let myButton3 = document.querySelector("#on-button")

myButton3.addEventListener("click", ()=>{alert("배고파")} )

const textButton = document.querySelector("#change-text")
// const title = document.querySelector("#title")
textButton.addEventListener("click", ()=>{
    title.textContent = "새로운 이름!!";
    title.style.backgroundColor = "blue"
    title.style.color = "red"
})

let myButton4 = document.querySelector("ungae")
const colorButton2 = document.querySelector("#ungae")
colorButton2.addEventListener("click", ()=>{alert("애애앵")
    document.body.style.backgroundColor = "brown";
})
const textButton2 = document.querySelector("#ungae")
const title2 = document.querySelector("#title2")
textButton2.addEventListener("click", ()=>{
    title2.textContent = "응애애애ㅐㅇ";
    title2.style.backgroundColor = "purple"
    title2.style.color = "pink"
})




const commentlist = document.querySelector('#comment-list')
const commenInput = document.querySelector('#comment-input')
const commentInputBtn = document.querySelector('#comment-button')

commentInputBtn.addEventListener("click", ()=>{
    const li =  document.createElement("li");
    li.textContent = commenInput.value;
    commentlist.append(li);
})
