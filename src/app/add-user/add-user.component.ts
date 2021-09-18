import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  fetchitems: any;

  constructor(private _formBuilder: FormBuilder, private service: DemoService) { }

  ngOnInit(): void {

    this.service.getItems().subscribe(res =>{
      console.log(res);
      this.fetchitems = res;
    })

    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      amount: ['', Validators.required],
      stock: ['', Validators.required]
    });
    
    }

    submit(){
      console.log(this.firstFormGroup.value);
      console.log(this.secondFormGroup.value);
  }

  formFetch() {
   
  }

}
