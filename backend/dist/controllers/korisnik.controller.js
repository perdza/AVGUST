"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikController = void 0;
const korisnik_1 = __importDefault(require("../models/korisnik"));
class KorisnikController {
    constructor() {
        this.login = (req, res) => {
            let korisnicko = req.body.korisnicko;
            let lozinka = req.body.lozinka;
            korisnik_1.default.findOne({ 'korisnicko': korisnicko, 'lozinka': lozinka }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else if (korisnik.admin)
                    res.json(null);
                else
                    res.json(korisnik);
            });
        };
        this.registracija = (req, res) => {
            let korisnik = new korisnik_1.default({
                korisnicko: req.body.korisnicko,
                lozinka: req.body.lozinka,
                ime: req.body.ime,
                prezime: req.body.prezime,
                adresa: req.body.adresa,
                telefon: req.body.telefon,
                email: req.body.email,
                admin: false
            });
            korisnik.save((err, resp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "poruka": "greska" });
                }
                else
                    res.json({
                        "poruka": "ok"
                    });
            });
        };
    }
}
exports.KorisnikController = KorisnikController;
//# sourceMappingURL=korisnik.controller.js.map