// uploaded images in assets/images folder for convenience
// having each images as an object in an array is the way to go because it allows you to at least predict the order in which the images will be parsed, although given the implementation below, it doesn't really matter

var imgList = [
  {
    src: 'http://i68.tinypic.com/mbn5t1.jpg',
    desc: 'close up of a dandelion'
  },
  {
    src: 'http://i66.tinypic.com/htefld.png',
    desc: 'misty lake'
  },
  {
    src: 'http://i67.tinypic.com/be61iu.png',
    desc: 'fox peeking behind a tree'
  },
  {
    src: 'http://i67.tinypic.com/ortqow.png',
    desc: 'little house on the water'
  },
  {
    src: 'http://i67.tinypic.com/2dqvzw7.png',
    desc: 'industrial glass'
  },
  {
    src: 'http://i65.tinypic.com/2wob21i.png',
    desc: 'tall, grand building'
  },
  {
    src: 'http://i65.tinypic.com/10i6yki.png',
    desc: 'solitary tree in winter'
  },
  {
    src: 'http://i66.tinypic.com/jgk5mg.png',
    desc: 'rock formation'
  },
  {
    src: 'http://i65.tinypic.com/20it3ci.png',
    desc: 'woman gazing into the water'
  },
  {
    src: 'http://i68.tinypic.com/168zor5.png',
    desc: 'sea cliff'
  },
  {
    src: 'http://i67.tinypic.com/11jt5c4.png',
    desc: 'dock at night'
  },
  {
    src: 'http://i64.tinypic.com/30jl9xi.png',
    desc: 'roller coaster track'
  }
];

(function() {
  'use strict';

  var galleryContainer = document.getElementById('gallery-container');

  function Gallery(numImgs) {

    this.numImages = _numImages();
    this.createGrid = function() {
      var num = this.numImages;
      for (var i = 0; i < num; i++) {
        galleryContainer.innerHTML += _populate(imgList[i], i);
      }
    }

    function _numImages() {
      return imgList.length;
    }

    function _populate(imgObj, id) {
      var img = new Img(imgObj);
      id = 'img-' + id;
      var tmpl = '<li class="image-container" id="' + id + '" style="background-image: url(\'' + img.src + '\')" title="' + img.desc + '" draggable="true" ondragstart="dragStart(event)" ondragover="dragHandler(event)"  ondrop="dropHandler(event)"></li>';

      return tmpl;
    }

  };

  // Img class is unnecessary given that all we have is src and desc, but if we were to scale the application, having a class might be useful
  function Img(imgObj) {
    this.src = imgObj.src;
    this.desc = imgObj.desc;
  }

  var gallery = new Gallery();
  gallery.createGrid();

})();

