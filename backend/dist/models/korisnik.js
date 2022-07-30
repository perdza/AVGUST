"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let korisnikSchema = new Schema({
    korisnicko: {
        type: String
    },
    lozinka: {
        type: String
    },
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    adresa: {
        type: String
    },
    telefon: {
        type: String
    },
    email: {
        type: String
    },
    admin: {
        type: Boolean
    }
});
exports.default = mongoose_1.default.model('korisnikModel', korisnikSchema, 'korisnici');
//# sourceMappingURL=korisnik.js.map