import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IotService {

  private iotUrl = 'https://test.miniqiang.com';  // URL to web api

  constructor(private http: HttpClient) { }

  postCook(cook: any): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('Order', cook.order);
    formData.append('Name', cook.name);
    formData.append('condiment1', cook.values[0]);
    formData.append('condiment2', cook.values[1]);
    formData.append('condiment3', cook.values[2]);
    formData.append('condiment4', cook.values[3]);
    return this.http.post<string>(this.iotUrl,
      formData
  )
      .pipe(
      tap(() => console.log(`postCook`)),
      catchError(this.handleError('postCook', ''))
    )
      ;
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

