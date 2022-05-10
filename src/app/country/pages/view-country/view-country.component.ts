import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent implements OnInit {

  country!: Country;

  constructor(private activedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    this.activedRoute.params
    .pipe(
      switchMap( ({id}) => this.countryService.getCountryById(id)),
      tap(console.log)
    )
    .subscribe(country => { this.country = country })
    
    
    // this.activedRoute.params
    // .subscribe( ({ id }) => {
    //   console.log( id )
    //   this.countryService.getCountryById( id )
    //   .subscribe( country => {
    //     console.log(country);
    //   })
    
    // }) 
  }

}
