const mongoose = require('mongoose');
const {Schema} = mongoose;

const SellSchema = new Schema ({
    cedula: {type: int , required: true},
    nombre: {type: String, required: true},
    producto: {type: int, required: true},
    cantidad: {type: int},
    valor: {type: int},
    iva: {type: int, required: true}
})

module.exports = mongoose.model('', NoteSchema)