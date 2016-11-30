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

  if (el.offsetTop < target.offsetTop ) {
    // console.log('insertAfter');
    parent.insertBefore(el, target.nextSibling);
  } else if (el.offsetTop == target.offsetTop) {
    if (el.offsetLeft < target.offsetLeft) {
      // console.log('insertAfter');
      parent.insertBefore(el, target.nextSibling);
    } else {
      // console.log('insertBefore');
      parent.insertBefore(el, target);
    }
  } else {
    // console.log('insertBefore');
    parent.insertBefore(el, target);
  }

}

function dragHandler(e) {
  if (e.target.className == 'image-container') {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

}