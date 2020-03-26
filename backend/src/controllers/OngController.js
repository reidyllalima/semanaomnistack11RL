const crypto = require('crypto');  // criptografia e gera string aleatória
const connection = require('../database/connection');

module.exports = {
    async index (request, response)  {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs)
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');  // gera 4 caracteres aleatório e converte p string em Hexadeicmal

    
   await connection('ongs').insert({
        id, 
        name, 
        email, 
        whatsapp, 
        city, 
        uf,
    })
    return response.json({ id });
    }
};