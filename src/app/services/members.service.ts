import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(
    private apiUrl:string,
    private http: HttpClient
  ) {
    this.apiUrl="https://639f12865eb8889197f3a8a0.mockapi.io/"
   }

  getUsers() {
    alert(this.apiUrl)
    return this.http.get(`${this.apiUrl}/members`);
  }

  getUser(id:number) {
    return this.http.get(`${this.apiUrl}/members/${id}`);
  }
}

