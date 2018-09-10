import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class IotService {

  private iotUrl = 'http://116.62.214.38/?Order=0&Name=殷振南测试01&condiment1=5&condiment2=0&condiment3=0&condiment4=0';  // URL to web api

  constructor(private http: HttpClient) { }

  postCook(): Observable<string[]> {
    return this.http.get<string[]>(this.iotUrl,
      httpOptions).pipe(
      tap(() => console.log(`postCook`)),
      catchError(this.handleError('postCook', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    console.log(result);
    return (error: any): Observable<T> => {
      console.log(`222`);
      // TODO: send the error to remote logging infrastructure
      console.error('got error while ' + operation);
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

