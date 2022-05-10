import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v2'

  constructor(private http: HttpClient) { }

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,flag,population,alpha2Code');
  } 

  searchCountry(search: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${search}`;
    return this.http.get<Country[]>(url)
  }

  searchCapital(search: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${search}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getCountryById(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }


}
