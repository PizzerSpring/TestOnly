import axios from 'axios';
import { getComponent } from './../../app/js/component';
import Component, { ComponentProps, getComponents } from '../../app/js/component';
import Input from '../input/input';
import FormButton from '../form-button/form-button';

export default class Form extends Component.Default {
    nInputs: Input[];
    nFormButton: FormButton;
    errors: HTMLElement;
    success: HTMLElement;
    constructor(element: ComponentProps) {
        super(element);

        this.nInputs = getComponents('input', this.nRoot).map(component => new Input(component, this.upDateButton));
        this.nFormButton = new FormButton(getComponent('form-button', this.nRoot));

        this.errors = this.getElement('errors');
        this.success = this.getElement('success');

        this.nRoot.addEventListener('submit', this.onSubmit);
        

        axios.get('http://dev.studio-mind.ru/api/form')
        .then(result => {
            for(let i = 0; i < result.data.list.length; i++) {
                console.log(result.data.list[i].nameId);
            }
        })
        .catch(error => console.log(error));

        
    }

    upDateButton = () => {
        const state = this.nInputs.every(item => {
            if(item.required) return item.valid;
            return true;
        });

        this.nFormButton.setDisabled(!state);
        
    };


     

    

    

    onSubmit = async (e: Event) => {
        e.preventDefault();

        let data: any = {};


        this.nInputs.forEach(item => {
            data[item.name] = item.value;
        });

        const obj = {
            ...data,
            nameId: "vladislav2"
        };
        

        try {
            const response = await axios.post('http://dev.studio-mind.ru/api/form', obj);
            const div = document.createElement('div');
            div.className = `${this.nRootName}__success-item`;
            div.innerHTML = 'Форма успешно отправлена';

            this.success.appendChild(div);
        } catch(e) {
            const div = document.createElement('div');
            div.className = `${this.nRootName}__errors-item`;
            div.innerHTML = e.message;

            this.errors.appendChild(div);
        }

    }

    

    destroy = () => {
        // Destroy functions
    }
}