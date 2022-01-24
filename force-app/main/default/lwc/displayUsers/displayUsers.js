import { LightningElement,track,wire } from 'lwc';
import getAllUsers from '@salesforce/apex/Users.getAllUsers';
let i = 0;
export default class DisplayUsers extends LightningElement {

    users = [];
    //  users = [];
    //  error;
    //  @track choosenValue = '';
     
    // connectedCallback(){
    //     getAllUsers()
    //     .then(result =>{
    //         this.users = result;
    //         for(i=0;i<this.users.length;i++){
    //             this.users = [...this.users, { label: data[i].Name, value: data[i].Id}]
    //             console.log(this.users.label);
    //             console.log(this.users.value);
    //             console.log(this.users);
    //         }
    //     })
    //     .catch(error =>{
    //         this.error = error;
    //     })
    // }
    
    // get options(){
    //     console.log(this.users);
    //     return this.users.data.value;
    // }

    // handleChange(event){
    //     const selectedOption = event.detail.value;
    //     console.log('selected value=' + selectedOption);
    //     this.choosenValue = selectedOption;
    // }

    // get selectedValue(){
    //     return this.choosenValue;
    // }


    // @track items = []; //this will hold key, value pair
    // @track value = ''; //initialize combo box value

    // @track chosenValue = '';

    // @wire(getAllUsers)
    // wiredUserRoles({ error, data }) {
    //     if (data) {

    //         //create array with elements which has been retrieved controller
    //         //here value will be Id and label of combobox will be Name
    //         for(i=0; i<data.length; i++)  {
    //             this.items = [...this.items ,{value: data[i].Id , label: data[i].Name} ];                                   
    //         }                
    //         this.error = undefined;
    //     } else if (error) {
    //         this.error = error;
    //         this.contacts = undefined;
    //     }
    // }

    // //gettter to return items which is mapped with options attribute
    // get roleOptions() {
    //     return this.items;
    // }

    // handleChange(event) {
    //     // Get the string of the "value" attribute on the selected option
    //     const selectedOption = event.detail.value;
    //     console.log('selected value=' + selectedOption);
    //     this.chosenValue = selectedOption;
    // }

    // //this value will be shown as selected value of combobox item
    // get selectedValue(){
    //     return this.chosenValue;
    // }



@wire(getAllUsers) getAllUsers({ data, error }) {
    console.log(data);
    if (data) {
        this.users = data.map(user => ({ label: user.Id, value: user.Name })
        
        );
        console.log(this.users);
    } else {
    }
};






}