import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './models/country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]>{
    return this.http.get<Country[]>('https://restcountries.com/v2/all?fields=name,capital,population,area,flag,region');
  }
}
