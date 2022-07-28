import mongoose from 'mongoose'

const Schema = mongoose.Schema;

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
    email: {
        type: Number
    }
})

export default mongoose.model('korisnikModel', korisnikSchema, 'korisnici')
