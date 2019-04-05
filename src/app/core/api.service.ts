import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Slot } from '../shared/models/slots.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private slotsApi: string;

  constructor(private http: HttpClient) {}

  /**
   * This is the getSlots function which return slots
   * within a given date range
   * @param dateFromServiceValue This is datefrom value parameter
   * @param dateToServiceValue This is datefrom value parameter
   * @returns Observable of slot array
   */
  getSlots(dateFromServiceValue, dateToServiceValue): Observable<Slot[]> {
    this.slotsApi = `${
      environment.apiUrl
    }pitches/32990/slots?filter[starts]=${dateFromServiceValue}&filter[ends]=${dateToServiceValue}`;

    return this.http.get<Slot[]>(this.slotsApi).pipe(
      map((data: any) => {
        return data.data;
      }),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * This is the handleError function
   * @param error This is error parameter of type HttpErrorResponse
   * @returns Observable of slot array
   */
  private handleError(error: HttpErrorResponse): Observable<{}> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // return an observable with a friendly error message for user
    return throwError(errorMessage);
  }
}
