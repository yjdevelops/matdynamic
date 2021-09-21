import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {
data: any;
registerForm: FormGroup;

  constructor(private service: DemoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({

    });

    this.service.getForm().subscribe(res =>{
      console.log(res);
      this.data = res;  
      this.createElement();
    })
    this.Alldetails();
  }

  createElement() {
    this.data.forEach((element: { ID: string; }) => {
      this.registerForm.addControl(element.ID, new FormControl(''));
    })
    console.log(this.registerForm);
  }

  Alldetails() {
    console.log(this.registerForm.value);
  }

}
