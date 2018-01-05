const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório'"
//number.min
//number.max
//string.enun - Mensagens de erro do mongoose[]
