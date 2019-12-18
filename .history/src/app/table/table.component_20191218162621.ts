import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { interval } from 'rxjs';

// services
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  // vars
  dataSource = new MatTableDataSource();
  displayedColumns = ['title', 'url', 'created_at', 'author'];
  timer = interval(1000);

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.timer.subscribe((val) => {
      console.log(val);
      this.fetchData();
    });

    // this.fetchData();
  }

  fetchData() {
    this.dataService.getAllData()
      .subscribe((data) => {
        this.dataSource = data['hits'];
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
