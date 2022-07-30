import express from 'express'

import korisnikModel from '../models/korisnik'

export class KorisnikController{
    login = (req: express.Request, res: express.Response) => {
        let korisnicko = req.body.korisnicko;
        let lozinka = req.body.lozinka;

        korisnikModel.findOne({'korisnicko': korisnicko, 'lozinka': lozinka}, (err, korisnik) =>{
            if(err)
                console.log(err)
            //else if(korisnik.admin)
                //res.json(null)
            else
                res.json(korisnik)
        })
    }

    registracija = (req: express.Request, res: express.Response) => {
        let korisnik = new korisnikModel({
            korisnicko: req.body.korisnicko,
            lozinka: req.body.lozinka,
            ime: req.body.ime,
            prezime: req.body.prezime,
            adresa: req.body.adresa,
            telefon: req.body.telefon,
            email: req.body.email,
            admin: false
        })

        korisnik.save((err, resp) =>{
            if(err) {
                console.log(err);
                res.status(400).json({"poruka" : "greska"})
            }
            else res.json({
                "poruka": "ok"
            })
        }) 
    }
}