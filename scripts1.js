let tempvalue = null;
let dragElement = document.getElementById("clrButton");

dragElement.addEventListener("mousedown", function (event) {
  tempvalue = dragElement;
  //code to start drag
  dragElement.style.position = "absolute";
  dragElement.style.zIndex = 1000;
  dragElement.style.border = "1px solid black";
});

document.addEventListener("mouseover", function (e) {
  console.log(e.target.classList.value);
  if (
    tempvalue != null &&
    (e.target.classList.value == "rightGrid1" ||
      e.target.classList.value == "DeleteZone")
  ) {
    let x = e.pageX - tempvalue.offsetWidth / 2;
    let y = e.pageY - tempvalue.offsetHeight / 2;
    tempvalue.style.left = x + "px";
    tempvalue.style.top = y + "px";
    tempvalue.style.border = "";
    if (e.target.id == "DeleteZone") {
      dragElement.remove();
    }
    // let newClone = dragElement.cloneNode(true);
    //document.getElementById("leftPallet").appendChild(newClone);
    tempvalue = null;
  }
});

document.addEventListener("mouseup", function (event) {
  //code while its drop
  if (tempvalue != null && e.target.classList.value == "DeleteZone") {
    dragElement.remove();
  }
  tempvalue = null;
});

//Date.now()
//dragElement.addEventListener('mousedown', initDrag)