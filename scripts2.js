let tempvalue = null;
document.addEventListener("mousedown", function (e) {
  console.log(e);

  if (
    e.target.classList.value == "dragItem" ||
    e.target.classList[0] == "bi" ||
    e.target.tagName == "IMG"
  ) {
    tempvalue = e;
    e.target.style.position = "absolute";
    e.target.style.zIndex = 1000;
  }
});

document.addEventListener("mouseover", mouseMove);

function mouseMove(e) {
  if (
    tempvalue != null &&
    (e.target.classList.value == "centerArea" ||
      e.target.classList.value == "deleteZone")
  ) {
    let x = e.pageX - tempvalue.target.offsetWidth / 2;
    let y = e.pageY - tempvalue.target.offsetHeight / 2;
    // let x = e.pageX;
    //let y = e.pageY;

    tempvalue.target.style.left = x + "px";
    tempvalue.target.style.top = y + "px";
    tempvalue.target.style.border = "2px solid black";
    if (e.target.classList.value == "deleteZone") {
      console.log("deletezone");
      tempvalue.target.style.visibility = "hidden";
    }
    //tempvalue = null;
  }
}

document.addEventListener("mouseup", function (event) {
  //tempvalue.target.style.border = "";
  tempvalue = null;
});

document.getElementById("firstElement").addEventListener("click", function () {
  document.getElementById("section1").style.zIndex = 1;
  document.getElementById("section2").style.zIndex = 1;
  document.getElementById("section3").style.zIndex = 2;
  document.getElementById("section4").style.zIndex = 1;
  document.getElementById("section5").style.zIndex = 1;
  document.getElementById("firstElement").style.color = "red";
});

document.getElementById("menuText").addEventListener("click", function () {
  document.getElementById("section1").style.zIndex = 1;
  document.getElementById("section2").style.zIndex = 1;
  document.getElementById("section3").style.zIndex = 1;
  document.getElementById("section4").style.zIndex = 2;
  document.getElementById("section5").style.zIndex = 1;
  document.getElementById("menuText").style.color = "red";
});

document.getElementById("menuColour").addEventListener("click", function () {
  document.getElementById("section1").style.zIndex = 2;
  document.getElementById("section2").style.zIndex = 1;
  document.getElementById("section3").style.zIndex = 1;
  document.getElementById("section4").style.zIndex = 1;
  document.getElementById("section5").style.zIndex = 1;
  document.getElementById("menuText").style.color = "red";
});

document.getElementById("menuShape").addEventListener("click", function () {
  document.getElementById("section1").style.zIndex = 1;
  document.getElementById("section2").style.zIndex = 2;
  document.getElementById("section3").style.zIndex = 1;
  document.getElementById("section4").style.zIndex = 1;
  document.getElementById("section5").style.zIndex = 1;
  document.getElementById("menuText").style.color = "red";
});

document.getElementById("menuCustom").addEventListener("click", function () {
  document.getElementById("section1").style.zIndex = 1;
  document.getElementById("section2").style.zIndex = 1;
  document.getElementById("section3").style.zIndex = 1;
  document.getElementById("section4").style.zIndex = 1;
  document.getElementById("section5").style.zIndex = 2;
  document.getElementById("menuText").style.color = "red";
});

let zoom = 1;
document
  .getElementsByClassName("fas fa-search-plus")[0]
  .addEventListener("click", function () {
    zoom = zoom + 0.03;
    document.getElementsByClassName("centerArea")[0].style.zoom = zoom;
  });

document
  .getElementsByClassName("fas fa-search-minus")[0]
  .addEventListener("click", function () {
    zoom = zoom - 0.03;
    document.getElementsByClassName("centerArea")[0].style.zoom = zoom;
  });

document.getElementById("clearAll").addEventListener("click", function () {
  location.reload();
});

document.getElementById("export").addEventListener("click", function () {
  console.log("export");
  let i = document.getElementsByClassName("centerArea")[0].toDataURL();
  console.log(i);
});

let loadFile = function (event) {
  let image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};
