import Component, { ComponentProps } from '../../app/js/component';

export default class Twoblocks extends Component.Default {
    el1: HTMLElement;
    el2: HTMLElement;
    constructor(element: ComponentProps) {
        super(element);

        const [el1, el2] = this.getElements('container_block');
        this.el1 = el1;
        this.el2 = el2;
  

        const button = this.getElement('footer_button');
        button.addEventListener('click', this.onClickButton);

    }

    onClickButton = () => {
        this.el1.classList.toggle('twoblocks__container_block--green');
        this.el2.classList.toggle('twoblocks__container_block--none');
        console.log(1);
    }

    destroy = () => {
        // Destroy functions
    }
}