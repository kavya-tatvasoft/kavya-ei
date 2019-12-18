import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { interval } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// services
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  // vars
  dataSource: MatTableDataSource<any>;
  displayedColumns = ['title', 'url', 'created_at', 'author'];
  timer = interval(10000);

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.fetchData();
    this.timer.subscribe((val) => {
      this.fetchData();
    });
  }

  // fetch data from API and assign to dataSource
  fetchData() {
    this.dataService.getAllData()
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource(data['hits']);
      });
  }

  // filter data
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
