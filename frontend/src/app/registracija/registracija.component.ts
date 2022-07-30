import { Component, OnInit } from '@angular/core';
import { KorisniciService } from '../korisnici.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private korisnikServis: KorisniciService) { }

  ngOnInit(): void {
  }

  korisnicko: string;
  lozinka: string;
  //potvrdaLozinke: string;
  ime: string;
  prezime: string;
  adresa: string;
  telefon: string;
  email: string;

  poruka: string;

  registracija(){
    this.korisnikServis.registracija(this.korisnicko, this.lozinka, this.ime, this.prezime, this.adresa,
      this.telefon, this.email).subscribe(respObj => {
            if(respObj['poruka'] == 'ok')
              this.poruka = 'Korisnik registrovan!'
            else
              this.poruka = 'Greska!'
      })
  }
}
