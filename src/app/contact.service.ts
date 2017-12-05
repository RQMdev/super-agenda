import { Injectable } from '@angular/core';
import { CONTACT_LIST } from './contact-list-mock';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()

export class ContactService {
  private contactUrl = "api/contactList";

  constructor(private http: HttpClient) {

  }

  getContactList(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.contactUrl)
    .pipe(
      catchError(this.handleError('getContactList', []))
    );
  }

  getContact(id: number): Observable<Contact> {
    const url = `${this.contactUrl}/${id}`;
    return this.http.get<Contact>(url)
    .pipe(
      catchError(this.handleError<Contact>(`getContact id=${id}`))
    );
  }

  updateContact(contact: Contact): Observable<any> {
    return this.http.put(this.contactUrl, contact, httpOptions).pipe(
      catchError(this.handleError<any>('updateContact'))
    );
  }


// handleError begin---
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
// handleError end---
}
