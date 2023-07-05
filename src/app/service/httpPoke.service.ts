import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpPokeService {
  private env = environment;
  next: string = "";

  constructor(private http: HttpClient) { }

  listing(): Observable<any> {
    return this.http.get(`${this.env.apiURL}pokemon/`)
  }

  moreListing(): Observable<any> {
    return this.http.get(`${this.env.apiURL}`)
  }

  listingSearch(search: any): Observable<any> {
    return this.http.get(`${this.env.apiURL}pokemon/${search}`)
  }

  listingPokemon(index: any): Observable<any> {
    return this.http.get(`${this.env.apiURL}pokemon/${index}`)
  }

  getPokemon(url: any): Observable<any> {
    return this.http.get(`${url}`)
  }

  getType(url: any): Observable<any> {
    return this.http.get(url)
  }

  getEvolution(index: any): Observable<any> {
    return this.http.get(`${this.env.apiURL}evolution-chain/${index}`)
  }
}
