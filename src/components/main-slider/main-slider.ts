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

        this.nSwiper = new Swiper(this.getElement('container'), {
            loop: true,
            slidesPerView: 1,
            on: {
                slideChange: () => {
                   setTimeout(() => { this.nSwiperClonethree.slideTo(this.nSwiper.activeIndex); }, 0);
                }
            }
            
        });

        this.nSwiperClone = new Swiper(this.getElement('container-clone'), {
            loop: true,
            slidesPerView: 1,
    
        });

        this.nSwiperClonethree = new Swiper(this.getElement('container-clonethree'), {
            loop: true,
            slidesPerView: 1,

            on: {
                slideChange: () => {
                    setTimeout(() => { this.nSwiper.slideTo(this.nSwiperClonethree.activeIndex); }, 0);
                    setTimeout(() => { this.nSwiperClone.slideTo(this.nSwiperClonethree.activeIndex); }, 0);
                }
            }
           
            
        });

        
        this.nSwiperClone.controller.control = this.nSwiper;
        this.nSwiper.controller.control = this.nSwiperClone;
        
        /*this.nSwiper.controller.control = this.nSwiperClone;
        this.nSwiperClone.controller.control = this.nSwiper;
        this.nSwiperClone.controller.control = this.nSwiperClonethree;
        this.nSwiperClonethree.controller.control = this.nSwiperClone;
        this.nSwiperClonethree.controller.control = this.nSwiper;
        this.nSwiper.controller.control = this.nSwiperClonethree;*/
        
    }

    

    destroy = () => {
        // Destroy functions
    }
}