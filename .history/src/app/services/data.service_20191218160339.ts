import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // vars
  apiUrl = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

  constructor(
    private http: HttpClient
  ) { }
}
