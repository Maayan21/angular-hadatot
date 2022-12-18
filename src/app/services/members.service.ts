import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Member } from '../classes/member';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  apiUrl: string='https://639f12865eb8889197f3a8a0.mockapi.io';
  constructor(private http: HttpClient) {
  }


  getUser(id: number) : Observable<Member>{
    return this.http.get<Member>(`${this.apiUrl}/members/${id}`);
  }

  getUsers(): Observable<Array<Member>> {
    return this.http.get<Array<Member>>(`${this.apiUrl}/members`);
  }

}


