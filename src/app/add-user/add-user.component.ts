import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  isLinear = true;
 basicForm: FormGroup;
 roleForm: FormGroup;
 moreDetails: FormGroup;
  fetchitems: any;

  constructor(private _formBuilder: FormBuilder, private service: DemoService) { }

  ngOnInit(): void {
    this.basicForm = this._formBuilder.group({

    });
    
  this.roleForm = this._formBuilder.group({

  });

  this.moreDetails = this._formBuilder.group({

  });



    this.service.getForm().subscribe(res =>{
      console.log(res);
      this.fetchitems = res;
      this.createElement();
    })

    // this.firstFormGroup = this._formBuilder.group({
    //   name: ['', Validators.required],
    //   description: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   amount: ['', Validators.required],
    //   stock: ['', Validators.required]
    // });
    
    }

    submit(){
      console.log(this.basicForm.value);
      console.log(this.roleForm.value)
     
  }

  createElement() {
    this.fetchitems.forEach((element: { ID: string; }) => {
      this.basicForm.addControl(element.ID, new FormControl(''));
      this.roleForm.addControl(element.ID, new FormControl(''));
      this.moreDetails.addControl(element.ID, new FormControl(''));
    })
    console.log(this.basicForm);
    console.log(this.roleForm);
  }

}
