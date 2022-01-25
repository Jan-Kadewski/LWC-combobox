import { LightningElement } from 'lwc';

export default class InputsForNewUser extends LightningElement {

    handleCreateNewUserBasedOnPrevious(event){
        console.log(event.target.value);
  
        
     }

}