let addCounter = 2;

function onDragStart(event) {
  event.dataTransfer.setData("text", event.target.id);

  event.currentTarget.style.backgroundColor = "yellow";
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData("text");

  const draggableElement = document.getElementById(id);
  const dropzone = event.target;

  if (
    dropzone.className === "dropzone" ||
    dropzone.className === "dropzone1" ||
    dropzone.className === "dropzone2"
  ) {
    dropzone.appendChild(draggableElement);
  }
}

function onTodo(event) {
  const id = event;
  const draggableElement = document.getElementById(id);
  const grandElement = draggableElement.parentElement.parentElement;
  console.log(grandElement);

  const dropzone1 = document.getElementById("tddropzone");

  dropzone1.appendChild(grandElement);

//   console.log(draggableElement.parentElement.parentElement.parentElement);
//   if (
//     draggableElement.parentElement.parentElement.parentElement.className ===
//     "dropzone"
//   ) {
//     const doingRemove = document.getElementById(event);
//     doingRemove.style.display = "none";
//     const todoAdd = document.getElementById("btn-doing");
//     todoAdd.style.display = "flex";
//     todoAdd.style.flexDirection = "row";
//     const doneAdd = document.getElementById("btn-done");
//     doneAdd.style.display = "flex";
//   }
}

function onDoing(event) {
  const id = event;
  const draggableElement = document.getElementById(id);
  const grandElement = draggableElement.parentElement.parentElement;
  console.log(grandElement);

  const dropzone1 = document.getElementById("doingdropzone");

  dropzone1.appendChild(grandElement);

  console.log(draggableElement.parentElement.parentElement.parentElement);
  if (
    draggableElement.parentElement.parentElement.parentElement.className ===
    "dropzone1"
  ) {
    const doingRemove = document.getElementById(event);
    doingRemove.style.display = "none";
    // const btnIdTodo = "btn-todo-" + (addCounter-1)
    // const todoAdd = document.getElementById(btnIdTodo);
    // todoAdd.style.display = "flex";
    const btnIdDone = "btn-done-" + (addCounter-1)
    const doneAdd = document.getElementById(btnId);
    doneAdd.style.display = "flex";
  }
}

// const deneme = document.getElementsByClassName("tdmaincardbox")

// if(deneme.parentElement==="dropzone1"){
//      const btnIdTodo = "btn-todo-" + (addCounter-1)
//     const todoAdd = document.getElementById(btnIdTodo);
//     todoAdd.style.display = "flex";
// }


function onDone(event) {
  const id = event;
  const draggableElement = document.getElementById(id);
  const grandElement = draggableElement.parentElement.parentElement;
  console.log(grandElement);

  const dropzone1 = document.getElementById("donedropzone");

  dropzone1.appendChild(grandElement);

//   console.log(
//     draggableElement.parentElement.parentElement.parentElement.className
//   );
//   if (
//     draggableElement.parentElement.parentElement.parentElement.className ===
//     "dropzone2"
//   ) {
//     const doingRemove = document.getElementById(event);
//     doingRemove.style.display = "none";
//     const todoAdd = document.getElementById("btn-todo");
//     todoAdd.style.display = "flex";
//     todoAdd.style.flexDirection = "row";
//     const doingAdd = document.getElementById("btn-doing");
//     doingAdd.style.display = "flex";
//     doingAdd.style.flexDirection = "row";
//   }
}

function addCard() {
  if ((onclick = true)) {
  }
  const originalDiv = document.querySelector("#draggable-1");
  const div = document.createElement("div");
  const copiedDiv = originalDiv.cloneNode(true);
  console.log(copiedDiv.lastChild);
  copiedDiv.id = "draggable-" + addCounter;
  console.log(copiedDiv.id);
  const btnDoing = copiedDiv.querySelector("#btn-doing");
  btnDoing.id = "btn-doing-" + addCounter;
  console.log(btnDoing.id);
  const btnTodo = copiedDiv.querySelector("#btn-todo");
  btnTodo.id = "btn-todo-" + addCounter;
  btnTodo.style.display ="none"
  console.log(btnTodo.id);
  const btnDone = copiedDiv.querySelector("#btn-done");
  btnDone.id = "btn-done-" + addCounter;
  console.log(btnDone.id);
  const dropzone = document.getElementById("tddropzone");
  dropzone.appendChild(copiedDiv);
  addCounter = addCounter + 1;
}
