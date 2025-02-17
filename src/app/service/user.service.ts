import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  baseURL: string = 'https://jsonplaceholder.typicode.com/';

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(): Observable<any> {
    return this.http.get<IUser[]>(`${this.baseURL}/users`)
      .pipe(
        catchError(err => of([])),
        map((response) => response)
      )
  }
}
