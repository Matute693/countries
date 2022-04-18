import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v2'
  constructor(private http: HttpClient) { }

  searchCountry(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url)
  }


}