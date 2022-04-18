import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  termino: string = ''
  thereIsError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  buscar() {
    this.thereIsError = false;
    this.countryService.searchCountry(this.termino)
      .subscribe( (countries) => {
        console.log(countries);
        this.countries = countries;
        
      }, (err) => {
        this.thereIsError = true;
        this.countries = [];
      })
  }

}
