import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {SwapiPerson} from './swapi-person.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpTesterService {

  constructor(private _http: HttpClient) { }

  public getLuke$(): Observable<SwapiPerson> {
    return this.getSwapiPerson$(1);
  }

  public getAllSkywalkers$(): Observable<SwapiPerson[]> {
    const luke$ = this.getLuke$();
    const leia$ = this.getSwapiPerson$(5);
    const vader$ = this.getSwapiPerson$(4);
    return forkJoin(luke$, leia$, vader$);
  }

  private getSwapiPerson$(id: number): Observable<SwapiPerson> {
    return this._http.get<SwapiPerson>(`https://swapi.co/api/people/${id}/`);
  }
}
