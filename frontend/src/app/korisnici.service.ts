import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KorisniciService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  login(korisnickoIzForme, lozinkaIzForme){
    const data = {
      korisnicko: korisnickoIzForme,
      lozinka: lozinkaIzForme
    }
    return this.http.post(`${this.uri}/korisnici/login`, data);
  }
}
