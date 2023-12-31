import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserAPIList } from './user.interfaces';

const USER_API = 'http://localhost:3000/api/user'

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<UserAPIList>(`${USER_API}/findall`)
  }

  insertUser(user: User) {
    return this.http.post<UserAPIList>(`${USER_API}/create`, user)
  }
}
