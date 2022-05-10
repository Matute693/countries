import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {

  regions: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActive: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  getCssClass(region: string) {
    return (region === this.regionActive) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activeRegion(region: string) {
    if( region === this.regionActive) { return;}
    this.regionActive = region;
    this.countries = [];
    this.countryService.searchRegion( region ).subscribe(
      countries => {
        this.countries = countries;
        console.log(countries)
      }
    )
  }
}
