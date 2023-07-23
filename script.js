
//variables
const addToDoBtn = document.querySelector(".add-to-do-btn"); //button
const inputToDo = document.querySelector(".add-to-do"); //input
const inputToDoHere = document.querySelector(".input-to-do-here"); //show to do 
const toDoElement = document.querySelector(".to-do-elements"); // div containing to do cards
const deleteBtn = document.querySelectorAll (".delete-el") //delete button
const subHeader = document.querySelector(".sub-header") //header in to do part
const doneBtn = document.querySelectorAll(".done-el") // done button
const doneHeader = document.querySelector(".done-header") // header in done part
const doneSection = document.querySelector(".done")
const inputValueSection = document.querySelector(".input-values-section")
const emptyInput =document.querySelector(".empty-input")
let html;
const toDo = document.querySelector (".to-do")


function createHtml () {

    toDoDiv = document.createElement('div');
    toDoDiv.classList.add("to-do-div")

    const newToDo = document.createElement("div")
    newToDo.classList.add("to-do-elements")

    const newToDoHere = document.createElement("p")
    newToDoHere.classList.add("input-to-do-here")
    newToDoHere.innerText = inputToDo.value

    newDoneButton = document.createElement("button")
    newDoneButton.classList.add("done-el")
    newDoneButton.innerHTML = ("<i class='fa-solid fa-check'>")

    newDeleteButton = document.createElement("button")
    newDeleteButton.classList.add("delete-el")
    newDeleteButton.innerHTML = ("<i class='fa-solid fa-trash'>")

    toDoDiv.appendChild(newToDo)
    newToDo.appendChild(newToDoHere)
    newToDo.appendChild(newDoneButton)
    newToDo.appendChild(newDeleteButton)

    html = toDoDiv.innerHTML
}


// Insert To Do
addToDoBtn.addEventListener ("click" , () =>{
       
    if (inputToDo.value) { 

        createHtml ()

        subHeader.insertAdjacentHTML("afterend" , html)

        emptyInput.classList.add("hidden")

        inputToDo.value = ''; 
        
    } else {
       emptyInput.classList.remove("hidden")
    }
})


toDo.addEventListener('click' , DeleteDone)


function DeleteDone (event) {
    const item = event.target;

    if (item.classList[0] === ("delete-el")) {
        const deleteParent = item.parentNode
        deleteParent.remove()
    } else if (item.classList[0] === ("done-el")) {
        const doneParent = item.parentNode
        doneParent.classList.add("done-parent")
    }

}
