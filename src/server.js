require("./db/connection")
const express = require("express")
const app = express( )
const port = process.env.PORT || 5000 ;
const movieRouter = require("./movie/movie.route")
const userRouter = require("./user/user.routes");
app.use(express.json())
app.use(movieRouter)
app.use(userRouter);

app.listen( port , ( ) => {
    console.log(`Listen on port ${port}`)
});