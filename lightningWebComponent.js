import { LightningElement } from 'lwc';
export default class LightningWebComponent extends LightningElement {
message;
handleChange(event){
this.message=event.target.value;
}
}
