import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {

  @Input() placeholder: string = '';
  @Output() onEnter  : EventEmitter<string> = new EventEmitter();
  @Output() onDebonce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = ''

  ngOnInit(): void {
      this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDebonce.emit(valor);
      })
  }
  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
 

}
