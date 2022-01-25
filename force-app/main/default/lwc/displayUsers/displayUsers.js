import { LightningElement,track,wire } from 'lwc';
import getAllUsers from '@salesforce/apex/Users.getAllUsers';
let i = 0;
export default class DisplayUsers extends LightningElement {


    @track users = []; //this will hold key, value pair
    @track value = ''; //initialize combo box value
    error = '';
    @track chosenValue = '';

    @wire(getAllUsers)
    wiredUserRoles({ error, data }) {
        if (data) {

            //create array with elements which has been retrieved controller
            //here value will be Id and label of combobox will be Name
            for(i=0; i<data.length; i++)  {
                this.users = [...this.users ,{value: data[i].Id , label: data[i].Name} ];                                   
            }                
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }

    //gettter to return users which is mapped with options attribute
    get userOptions() {
        return this.users;
    }

    handleChange(event) {
        // Get the string of the "value" attribute on the selected option
        const selectedOption = event.detail.value;
        console.log('selected value=' + selectedOption);
        this.chosenValue = selectedOption;
    }

    //this value will be shown as selected value of combobox item
    get selectedValue(){
        return this.chosenValue;
    }
}