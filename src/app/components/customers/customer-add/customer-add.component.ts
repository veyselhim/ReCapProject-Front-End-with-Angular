import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private customerService:CustomerService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCustomerForm();
  }

  createCustomerForm(){
    this.customerAddForm=this.formBuilder.group({
        userId:["",Validators.required],
        companyName:["",Validators.required],
        customerFindexScore:["",Validators.required]
    })      
  }
  
  add(){
    if(this.customerAddForm.valid){
      let customerModel = Object.assign({},this.customerAddForm.value)
      this.customerService.add(customerModel).subscribe(data=>{
        this.toastrService.success(data.message,"Başarılı")
      },dataError=>{
        if(dataError.error.Errors.length>0){
          for (let i = 0; i < dataError.error.Errors.length; i++) {
            
              this.toastrService.error(dataError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
          }
        }
      })
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
  }
}
