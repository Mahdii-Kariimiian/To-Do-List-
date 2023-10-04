TO DO List 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I used](#what-i-learned)
- [Author](#author)

## Overview
This App shows a piece of advice every time the button is clicked

### Screenshot
### Links
-Netlify: 

## My process
To Do List creates and saves task. There are done and delete button. "getwaves.io" has been used to build the background of this site.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript

### What I used

Here is a glimpse of what I used to build this mini project.
````

JavaScript
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

````
## Author
Mahdi Karimian
- linkedin (www.linkedin.com/in/mahdi-karimian-116643273)
- Frontend Mentor – @Mahdii-Kariimiian (https://www.frontendmentor.io/profile/Mahdii-Kariimiian)


