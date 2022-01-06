const {Router} = require("express")
const movieRouter = Router( )
const {addMovie, findMovie, updateMovie, deleteMovies} = require("./movie.controllers")

movieRouter.post("/movie" , addMovie)
movieRouter.get("/movie" , findMovie)
movieRouter.put("/movie" , updateMovie)
movieRouter.delete("/movie" , deleteMovies)

module.exports = movieRouter;