import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://local.sportsengine.com/node/api/v1?id=';

@Injectable({
  providedIn: 'root'
})
export class DrupalnodeService {
  private nodeid = '10856';

  constructor(private http: HttpClient) { }

  getNode() {
    return this.http.get(`${BASE_URL}${this.nodeid}`);
  }
}
