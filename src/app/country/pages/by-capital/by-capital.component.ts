import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent {

  placeholder = 'Buscar por Capital. . .';
  thereIsError: boolean = false;
  termino: string = '';
  capital: Country[] = [];

  constructor(private countryService: CountryService) { }

  searchCapital(search: string) {
    this.thereIsError = false;
    this.termino = search;
    this.countryService.searchCapital(search)
      .subscribe( (capital) => {
        console.log(capital);
        this.capital = capital;
        
      }, (err) => {
        this.thereIsError = true;
        this.capital = [];
      })
  }

  sugerencias(termino: string) {
    this.thereIsError = false
  }

}
