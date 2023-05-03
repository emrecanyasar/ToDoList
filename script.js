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

function onDoing(event) {
  // const id = this.parentElement.getAttribute("id");
  console.log("event", event.target);
  console.log("asdad", this.document.body.parentElement);


  const draggableElement = document.getElementById("draggable-1");

  console.log(draggableElement);
  let dropzone = "";

  const dropzone1 = document.getElementById("doingdropzone");

  console.log(dropzone1);
  dropzone1.appendChild(draggableElement);
}


function addCard() {
    if (onclick=true) {
        console.log("asdas");
    }
    const originalDiv = document.querySelector('#draggable-1');
    const div = document.createElement('div');
    const copiedDiv = originalDiv.cloneNode(true);
    // div.innerHTML ="asdasd"
    
    const dropzone = document.getElementById("tddropzone");
    dropzone.appendChild(copiedDiv);
}