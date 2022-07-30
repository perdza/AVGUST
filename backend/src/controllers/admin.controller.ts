import express from 'express'

import korisnikModel from '../models/korisnik'

export class AdminController{
    login = (req: express.Request, res: express.Response) => {
        let korisnicko = req.body.korisnicko;
        let lozinka = req.body.lozinka;

        korisnikModel.findOne({'korisnicko': korisnicko, 'lozinka': lozinka}, (err, korisnik) =>{
            if(err)
                console.log(err)
            else if(korisnik.admin)
                res.json(null)
            else
                res.json(korisnik)
        })
    }
}