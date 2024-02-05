import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string  = 'http://localhot:3000'

  constructor(
    private http: HttpClient
  ) { }

  public sign(payload: {email: string, password: string}): Observable<any>{
    return this.http.post(`${this.url}/sign`,payload).pipe(
      map((data)=> {
        console.log(data);
        return
      }),
      catchError((err) => {
        console.log(err);
        return throwError(()=> err);
      })
    )
  }
}
