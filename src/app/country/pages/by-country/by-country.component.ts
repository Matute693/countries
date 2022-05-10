import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  placeholder: string = 'Buscar por País. . .';
  termino: string = '';
  thereIsError: boolean = false;
  countries: Country[] = [];
  countriesSuggestions: Country[] = [];
  showSuggestions: boolean = false

  constructor(private countryService: CountryService) { }


  buscar(termino: string) {
    this.thereIsError = false;
    this.showSuggestions = false;
    this.termino = termino;
    this.countryService.searchCountry(termino)
      .subscribe( (countries) => {
        this.countries = countries;
        
      }, (err) => {
        this.thereIsError = true;
        this.countries = [];
      })
  }

  
  suggestion(termino: string) {
    this.thereIsError = false;
    this.termino = termino; 
    this.showSuggestions = true;
    this.countryService.searchCountry(termino)
    .subscribe(
      country => this.countriesSuggestions = country.splice(0, 5),
      err => this.countriesSuggestions = []
    );
  }

  searchSuggestions( termino: string ) {
    this.buscar(termino);
  }


}
