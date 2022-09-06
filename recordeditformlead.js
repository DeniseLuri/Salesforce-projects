import { LightningElement } from 'lwc';
import Lead from '@salesforce/schema/Lead';
import Name from '@salesforce/schema/Lead.Name';
import LastName from '@salesforce/schema/Lead.LastName';
import Company from '@salesforce/schema/Lead.Company';
import Status from '@salesforce/schema/Lead.Status';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {createRecord } from 'lightning/uiRecordApi';
 
 
export default class Formlead extends LightningElement {
Lead={
   Name:"",
   LastName:"",
   Company:"",
   Status:""
};
   handleInputChange(event){
   let name_= event.target.name;
   let value_ = event.target.value;
 
   this.lead = {...this.lead, [name_]:value_};
   console.log(this.lead);
  
   }
  
   createLead(){
       const fields = {};
       fields[Name.fieldApiName] = this.lead.Name;
       fields[LastName.fieldApiLastName] = this.lead.Lastname;
       fields[Company.fieldApiCompany] = this.lead.Company;
       fields[Status.fieldApiStatus] = this.lead.Status;
       console.log(fields);
 
       const recordInput = {apiName: Lead.objectApiname, fields};
       console.log(recordInput);
     
    createRecord(recordInput).then(
       ()=>{
               this.dispatchEvent(
                   new ShowToastEvent({
                   title:'Sucesso',
                   message:'Lead criado'
               })
           );
       }
   ).catch(
           (error)=>{
               this.dispatchEvent(
                   new ShowToastEvent({
                   title:'Erro',
                   message: error.body.message
                  
               })
           );        
       }
   )
      
}
 
}