import { Component, OnInit } from '@angular/core';
import {render} from "creditcardpayments/creditCardPayments";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {PaymentService} from "../service/payment.service";


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
addPayment:any;

  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private fb: FormBuilder,
              private routes:Router,
              private paymentService:PaymentService,
              ) {
    render({
        id:"#myPaypalButtons",
        currency:"USD",
        value:"45.00",
        onApprove:(details)=>{
          alert("Transaction Successfully")
        }
      }
    );

    this.addPayment = fb.group(
      {
        'name' : new FormControl(null, Validators.required),
        'email' : new FormControl(null, [Validators.required, Validators.email]),
        'password' : new FormControl(null, [Validators.required,]),
        'purpose':new FormControl(null, Validators.required),
        'price':new FormControl(null, Validators.required)
      }
    )
  }

  ngOnInit(): void {


  }

  onClear(){
    console.log(this.addPayment.value);
    this.addPayment.reset();
  }

  onSubmit() {
    if(this.addPayment.valid){
      console.log(this.addPayment.value);
      this.paymentService.addPayment(this.addPayment.value).subscribe((data: any) => {
        console.log(data);
        this.onClear();
        alert('Member Details Are Successful added')
      })
    }else
    {
      alert('Error message')
    }



  }

}
