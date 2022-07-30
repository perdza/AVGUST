"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const korisnik_1 = __importDefault(require("../models/korisnik"));
class AdminController {
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
    }
}
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map