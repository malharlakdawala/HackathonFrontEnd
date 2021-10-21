// let divElement = document.getElementById("clrButton");
// let dropElement = document.getElementById("rightGrid");

// let tempstorage = "";

// divElement.addEventListener("dragstart", function (e) {
//   // tempstorage = e.target;
//   console.log("dragstart");
//   e.dataTransfer.setData("text/plain", e.target.id);
//   e.dataTransfer.effectAllowed = "move";
// });

// dropElement.addEventListener("dragover", function (e) {
//   e.preventDefault();
//   console.log("dragover");
//   e.dataTransfer.dropEffect = "move";
// });

// dropElement.addEventListener("drop", function (event) {
//   event.preventDefault();
//   let d = event.dataTransfer.getData("text/plain");
//   event.target.appendChild(document.getElementById(d));
//   //if (tempstorage) {
//   // e.target.appendChild(tempstorage);
//   // e.target.style.background = "red";
//   // console.log(e);
//   // console.log(tempstorage);
//   // tempstorage.style.background = "blue";
// });

let tempvalue = null;
move("clrButton");
function move(id) {
  let dragElement = document.getElementById(id);
  dragElement.style.position = "absolute";
  dragElement.onmousedown = function (e) {
    //
    tempvalue = dragElement;
    // let shiftX = e.clientX - dragElement.getBoundingClientRect().left;
    // let shiftY = e.clientY - dragElement.getBoundingClientRect().top;
    // dragElement.style.position = "absolute";
    // dragElement.style.zIndex = 1000;
    //  }
  };
}
document.onmouseup = function (e) {
  //possibly re create a new element in place of the older one,
  //make utility function, to check whether the mouse is in green or red..
  //use add event listeners...
  //e.preventDefault();
  tempvalue = null;
};
document.onmousemove = function (e) {
  // let x = e.pageX - tempvalue.offsetWidth / 2;
  // let y = e.pageY - tempvalue.offsetHeight / 2;
  if (tempvalue != null) {
    let x = e.pageX;
    let y = e.pageY;
    tempvalue.style.left = x + "px";
    tempvalue.style.top = y + "px";
  }
};
// addlistener on greenpart.. and check for mousedown when temp is true?
// calculate borders of green part, check for x and y..
//

// let currentDroppable = null;

// let dragElement = document.getElementById("clrButton");
// dragElement.onmousedown = function (event) {
//   let shiftX = event.clientX - dragElement.getBoundingClientRect().left;
//   let shiftY = event.clientY - dragElement.getBoundingClientRect().top;

//   dragElement.style.position = "absolute";
//   dragElement.style.zIndex = 1000;
//   document.body.append(dragElement);

//   moveAt(event.pageX, event.pageY);

//   function moveAt(pageX, pageY) {
//     dragElement.style.left = pageX - shiftX + "px";
//     dragElement.style.top = pageY - shiftY + "px";
//   }

//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);

//     dragElement.hidden = true;
//     let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
//     dragElement.hidden = false;

//     if (!elemBelow) return;

//     let droppableBelow = elemBelow.getElementsByClassName("colorPalette")[0];
//     if (currentDroppable != droppableBelow) {
//       if (currentDroppable) {
//         // null when we were not over a droppable before this event
//         leaveDroppable(currentDroppable);
//       }
//       currentDroppable = droppableBelow;
//       if (currentDroppable) {
//         // null if we're not coming over a droppable now
//         // (maybe just left the droppable)
//         enterDroppable(currentDroppable);
//       }
//     }
//   }

//   document.addEventListener("mousemove", onMouseMove);

//   dragElement.onmouseup = function () {
//     document.removeEventListener("mousemove", onMouseMove);
//     dragElement.onmouseup = null;
//     console.log("mouseup");
//   };
// };
// function enterDroppable(elem) {
//   elem.style.background = "pink";
// }

// function leaveDroppable(elem) {
//   elem.style.background = "";
// }

// dragElement.ondragstart = function () {
//   return false;
// };
