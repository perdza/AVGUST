import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisniciService } from '../korisnici.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ruter: Router, private korisniciServis: KorisniciService) { }

  ngOnInit(): void {
  }

  korisnicko: string;
  lozinka: string;

  //greska: boolean;
  poruka: string;

  login(){
        this.korisniciServis.login(this.korisnicko, this.lozinka).subscribe((korisnik: Korisnik)=>{
          if(korisnik != null)
          {
            this.ruter.navigate(['citalac']);
          }
          else{
            this.poruka = "Pogresno uneti podaci!";
          }
        })
  }

}
