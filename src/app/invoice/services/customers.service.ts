import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  // private API_PATH = 'http://polls.apiblueprint.org';
  private API_PATH = './assets/customers.json';

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(`${this.API_PATH}`);
  }
}
