const Movie = require("./movie.models")

exports.addMovie = async (req , res) =>{ 
    try {
        const movie = await Movie.create(req.body)
        res.status(201).send({message: "Success" , movie})
    } catch (error) {
      console.log(error)  
      res.status(500).send({message: "Check server logs"})
    }
}

exports.findMovie = async (req , res) => {
  try {
   const movies = await Movie.find({})
   res.status(200).send({message: "Success", movies}) 
  } catch (error) {
    console.log(error)
    res.status(500 ).send({message: "Server Not Found "})
  }
}

exports.updateMovie = async (req , res) =>{
  try {
    const movies = await Movie.updateOne(
      {title : req.body.title}, 
      {$set : {actor: req.body.actor}}, 
      {new : true},);
    res.status(200 ).send({message: "Updated" , movies})
  } catch (error) {
    console.log(error)
    res.status(500).send({message: " Check server logs "})
  }
}

exports.deleteMovies = async ( req , res) =>{
  try {
    const movies = await Movie.deleteOne({title: req.params.title})
    res.status(200).send({message: "Successfully deleted"  , movies})
  } catch (error) {
    console.log(error)
    res.status(500 ).send({message: "Check server logs"})
  }
}