import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // vars
  apiUrl = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

  constructor(
    private http: HttpClient
  ) { }

  getAllData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
