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

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.fetchData();
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
