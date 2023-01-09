//SCHEMA - FILMS

const mongoose = require('mongoose');
const Joi = require('joi')

const filmsSchema = new mongoose.Schema({
    title: String,
    o_title: String,
    year: Number,
    director: String,
    cast: [String, String, String],
    url_img: String,
    url_imdb: String,
    url_video: String,
    comments: [{    "user_id": String, 
                    "username": String,
                    "comentary_t": String,
                    "comentary": String,
                    "date": Date,
                    "likes": Number
                }]

});

function validateFilms(films){
    const schema = Joi.object({
    title: Joi.string(),
    o_title: Joi.string(),
    year: Joi.number(),
    director: Joi.string(),
    cast: [Joi.string(), Joi.string(), Joi.string()],
    url_img: Joi.string(),
    url_imdb: Joi.string(),
    url_video: Joi.string(),
    comments: [{    "user_id": Joi.string(), 
                    "username": Joi.string(),
                    "comentary_t": Joi.string(),
                    "comentary": Joi.string(),
                    "date": Joi.date(),
                    "likes": Joi.number()
                }]
    })

    return schema.validate(films)
}

//MODELS Y EXPORTAR MODULO

const Films = mongoose.model('Films', filmsSchema)

module.exports = Films

module.exports.validate = validateFilms;