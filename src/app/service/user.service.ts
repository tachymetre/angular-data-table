import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

export interface IUser {
  _id: string;
  index: number;
  title: string;
  birthdate: string;
  firstName: string;
  lastName: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('assets/mock-data/mock.json');
  }
}
