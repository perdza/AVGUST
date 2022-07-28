import express from 'express'

import korisnikModel from '../models/korisnik'

export class KorisnikController{
    login = (req: express.Request, res: express.Response) => {
        let korisnicko = req.body.korisnicko;
        let lozinka = req.body.lozinka;

        korisnikModel.findOne({'korisnicko': korisnicko, 'lozinka': lozinka}, (err, korisnik) =>{
            if(err)
                console.log(err)
            else
                res.json(korisnik)
        })
    }

    registracija = (req: express.Request, res: express.Response) => {
        
    }
}