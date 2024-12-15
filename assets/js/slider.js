// const gap = 70;




export class Slider{
    constructor(name,){
        this.name= name
        this.carousel = document.getElementById("carusel");
        this.content = document.getElementById("content");
        this.next = document.getElementById("next");
        this.prev = document.getElementById("prev");
        this.block = document.getElementById("fhree__block");
        this.wrapper = document.getElementById('wrapper')
        // prev.style.display = 'flex';
        this.width = this.wrapper.scrollWidth;
        // let width1 = carousel.scrollWidth
        // let rast = 0
        this.scrollWidth=this.content.scrollWidth- this.wrapper.scrollWidth
        this.scrol = this.carousel.scrollLeft*2
        this.width = 0
    }
    slide_left(){
        next.style.display = 'flex'
        this.width -= this.block.scrollWidth
        this.content.scrollBy(-(this.block.scrollWidth + this.name.gap), 0);
        setTimeout(() => {
            // console.log(this.name);
            
            if(this.name.loop){
                if (this.width < this.content.scrollLeft) {
                    this.content.scrollBy(this.content.scrollWidth, 0);
                    console.log(this.width);
                    console.log(`left ${this.content.scrollLeft}`);
                    console.log('прокрут');
                    this.width = this.content.scrollLeft
                }
                
            }
            // rast-=(width+gap)
            if (this.carousel.scrollLeft == 0) {
                // prev.style.display = "none";
            }
            
            // if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                //     next.style.display = "flex";
                // }
            }, 500);
            
        }
        slide_right(){
            // console.log(this.content.scrollLeft);
            this.width += this.block.scrollWidth
            prev.style.display = 'flex'
            this.content.scrollBy(this.block.scrollWidth + this.name.gap, 0);
            setTimeout(() => {
                // alert(this.name.gap);
                const scrol = this.carousel.scrollLeft
                // console.log(`width ${content.scrollWidth- wrapper.scrollWidth}`);
                // console.log(`left ${scrol}`);
                console.log(`width ${this.width}`);
                console.log(`left ${this.content.scrollLeft}`);
                if(this.name.loop){
                    console.log(999);
                    if (this.width >= this.content.scrollWidth) {
                        this.content.scrollBy(-this.content.scrollWidth, 0);
                        console.log('прокрут');
                        this.width = 0
                    }
                    
                }
            // rast+=width+gap
            
            if (this.scrollWidth<= scrol) {
                // console.log(this.carousel.scrollLeft - this.wrapper.scrollWidth <= this.carousel.scrollLeft)
                // next.style.display = "none";
            }
        }, 500);
        
    }
    a(){
        // console.log(this.wrapper.scrollWidth);
        
    }
}


