import Component, { ComponentProps } from '../../app/js/component';
import Swiper, {Controller, Parallax} from 'swiper';
import { Method } from 'axios';

Swiper.use([Controller, Parallax]);

export default class MainSlider extends Component.Default {
    nSwiper: Swiper;
    nSwiperClone: Swiper;
    nSwiperClonethree: Swiper;

    constructor(element: ComponentProps) {
        super(element);

        let arr23 = [this.nSwiperClone, this.nSwiperClonethree];



        this.nSwiper = new Swiper(this.getElement('container'), {
            loop: true,
            slidesPerView: 1,
            controller: {
                control: this.nSwiperClone
                 
            }
        });
        this.nSwiper = new Swiper(this.getElement('container'), {
            loop: true,
            slidesPerView: 1,
            controller: {
                control: this.nSwiperClonethree               
            }
            
        });

        this.nSwiperClone = new Swiper(this.getElement('container-clone'), {
            loop: true,
            slidesPerView: 1,
            controller: {
                control: this.nSwiper
            }
    
        });
        this.nSwiperClone = new Swiper(this.getElement('container-clone'), {
            loop: true,
            slidesPerView: 1,
            controller: {
                control: this.nSwiperClonethree 
            }
    
        });

        this.nSwiperClonethree = new Swiper(this.getElement('container-clonethree'), {
            loop: true,
            slidesPerView: 1,
           controller: {
                control: this.nSwiper  
            }
            
        });
        this.nSwiperClonethree = new Swiper(this.getElement('container-clonethree'), {
            loop: true,
            slidesPerView: 1,
            controller: {
                control: this.nSwiperClone
            }
        });

        
        
    }

    

    destroy = () => {
        // Destroy functions
    }
}