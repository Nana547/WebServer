const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema( {
    title : {
        type : String,
        required : true,
        unique : true,
    },

    actor : {
        type : String,
        default : "Not Specified",
    }, 
});

const Movie = mongoose.model("Movie" , movieSchema)
module.exports = Movie;