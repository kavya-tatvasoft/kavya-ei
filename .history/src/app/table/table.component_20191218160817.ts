import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

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

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  fetchData() {
    this.dataService.getAllData()
      .subscribe((data) => {
        this.dataSource = data;
      });
  }

}
