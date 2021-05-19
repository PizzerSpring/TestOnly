import { getComponent } from './../../app/js/component';
import Component, { ComponentProps, getComponents } from '../../app/js/component';
import Input from '../input/input';
import FormButton from '../form-button/form-button';

export default class Form extends Component.Default {
    nInputs: Input[];
    nFormButton: FormButton
    constructor(element: ComponentProps) {
        super(element);

        this.nInputs = getComponents('input', this.nRoot).map(component => new Input(component, this.upDateButton));
        this.nFormButton = new FormButton(getComponent('form-button', this.nRoot));

        this.nRoot.addEventListener('submit', this.onSubmit)
    }

    upDateButton = () => {
        const state = this.nInputs.every(item => {
            if(item.valid) return item.getValue();
            return true;
        });


        
        this.nFormButton.setDisabled(!state);
        console.log(this.nInputs);
        
       // console.log(this.nInputs.every(item => item.valid === true));
        
       
       

    }

    onSubmit = (e: Event) => {
        e.preventDefault();

        let data: any = {};


        this.nInputs.forEach(item => {
            data[item.name] = item.getValue();
        });

        console.log(data);

    }

    destroy = () => {
        // Destroy functions
    }
}