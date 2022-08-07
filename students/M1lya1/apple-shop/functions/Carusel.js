document.addEventListener('DOMContentLoaded', () => {

class Carusel {
    constructor(imageArr, imgBox, frame) {
      this.images = [...imageArr] || [];
      this.imgBox = imgBox;
      this.frame = frame || 0;
    }
  
    setElement(element) {
      let elemCoords = element.offsetLeft;
      this.imgBox.style.marginLeft = -elemCoords + "px";
    }
    
    init() {
      this.setElement( this.images[this.frame] );
    }
    
    next() {
      if (this.frame < this.images.length - 1) {
        this.frame++;
        this.init();
      } else {
        this.frame = 0;
        this.init();
      }
    }
  
    prev() {
     if(this.frame < this.images.length && this.frame > 0) {
       this.frame--;
       this.init();
     } else {
       this.frame = this.images.length - 1;
       this.init();
     }
    }
    
  }

  let box = document.querySelector(".carusel__box");
            let arrImg = box.querySelectorAll(".carusel__item");
            let next = document.querySelector(".carusel__controls-right");
            let prev = document.querySelector(".carusel__controls-left");
            
            let carusel = new Carusel(arrImg, box, 0);
            carusel.init();
            next.addEventListener("click", () => {
             carusel.next(); 
            });
            prev.addEventListener("click", () => {
             carusel.prev(); 
            });
            setInterval(() => { carusel.next(); }, 3000);
});