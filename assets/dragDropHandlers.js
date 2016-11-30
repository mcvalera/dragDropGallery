/*
  drag and dropfunctionality
*/

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
  e.dataTransfer.dropEffect = 'move';
}

function dropHandler(e) {
  var el = document.getElementById(e.dataTransfer.getData("text"));
  var parent = el.parentNode;
  var target = e.target;

  if (el.offsetTop < target.offsetTop || el.offsetLeft < target.offsetLeft) {
    parent.insertBefore(el, target.nextSibling);
  } else {
    parent.insertBefore(el, target);
  }
}

function dragHandler(e) {
  if (e.target.className == 'image-container') {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    // var id = e.target.id;
    // var arr = [];
    // if (arr.indexOf(id) < 0) {
    //   console.log(id);
    //   arr.push(id);
    // }

  }

}