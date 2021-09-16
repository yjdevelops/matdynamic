import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataFetch } from '../data.interface';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  dataArray: any;

// ELEMENT_DATA: DataFetch[];
displayedColumns: string[] = ['name','username','email'];
// dataSource = new MatTableDataSource<DataFetch>(this.ELEMENT_DATA);
public dataSource: MatTableDataSource<DataFetch>;

ngOnInit(): void {
  //  let resp = this.demo.getData();
  //  resp.subscribe(users => this.dataSource.data=users as DataFetch[]);
  this.demo.getData().subscribe(res =>{
    console.log(res);
      this.dataArray = res;
      this.dataSource = new MatTableDataSource<DataFetch>(this.dataArray);
  })
}

  constructor(private demo: DemoService) {}
}
