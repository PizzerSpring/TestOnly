import Component, { ComponentProps } from '../../app/js/component';

export default class FormButton extends Component.Default {
    constructor(element: ComponentProps) {
        super(element);
    }

    setDisabled = (disabled: boolean) => {
        const disabledClass = `${this.nRootName}--disabled`;
        if(disabled) {
            this.nRoot.classList.add(disabledClass);
            this.nRoot.setAttribute('disabled', 'disabled');
        } else {
            this.nRoot.classList.remove(disabledClass);
            this.nRoot.removeAttribute('disabled');
        }
    }

    destroy = () => {
        // Destroy functions
    }
}