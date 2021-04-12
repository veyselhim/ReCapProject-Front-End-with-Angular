import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactAddForm:FormGroup;
  constructor(private contactService:ContactService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createContactForm();
  }

  createContactForm(){
    this.contactAddForm=this.formBuilder.group({
        firstName:["",Validators.required],
        lastName:["",Validators.required],
        country:["",Validators.required],
        city:["",Validators.required],
        subject:["",Validators.required]
    })      
  }

  add(){
    if(this.contactAddForm.valid){
      let carModel = Object.assign({},this.contactAddForm.value)
      this.contactService.add(carModel).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
      },dataError=>{
        if(dataError.error.Errors.length>0){
          for (let i = 0; i < dataError.error.Errors.length; i++) {
            
              this.toastrService.error(dataError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
          }
        }
      })
    }else{
      this.toastrService.error("Your form is missing","Dikkat")
    }
  }

}
