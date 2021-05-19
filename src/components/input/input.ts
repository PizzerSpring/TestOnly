import { getComponent } from './../../app/js/component';
import { fromEvent } from 'rxjs';
import Component, { ComponentProps } from '../../app/js/component';
import FormButton from '../form-button/form-button';

export default class Input extends Component.Default {
    sFormButton: FormButton;
    input: HTMLInputElement;
    name: string;
    value: string;
    type: string;
    required: boolean;
    error: HTMLElement;
    regex: RegExp;
    onChange: () => void;

    constructor(element: ComponentProps, onChange: () => void) {
        super(element);
        this.sFormButton = new FormButton(getComponent('form-button', this.nRoot));

        this.input = this.nRoot.querySelector('input');
        this.name = this.input.name;
        this.value = this.input.value;
        this.required = this.input.hasAttribute('data-required');
        this.type = this.input.type;
        this.error = this.getElement('error');

        this.regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        this.onChange = onChange;

        fromEvent(this.input, 'input').subscribe(this.onChangeInput);

       // let regex = /\d/;

       console.log(this.type);

        switch(this.type) {
            case 'email':
                this.regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                break;
            default: 
                this.regex = /\s/;
        }
    }

    getValue = () => this.input.value;

    onChangeInput = (e: Event) => {
       if(this.required) this.onChange();

       //console.log(this.regex);
       console.log(this.regex.test(this.getValue()));
       

       //console.log(this.regex.test(this.value));

       if(this.regex.test(this.getValue())) {
           this.setError('Ошибка!');
          // console.log(this.setError('Ошибка!'));
          this.sFormButton.setDisabled(this.regex.test(this.getValue()));
          
       } 
        if ((<HTMLInputElement>e.target)?.value?.length) {
            this.nRoot.classList.add('fill');
        } else {
            this.nRoot.classList.remove('fill');
        }
    }

    setError = (content: string) => {
        this.error.innerHTML = content;

    }


    destroy = () => {
        // Destroy functions
    }
}