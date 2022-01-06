const bcrypt = require("bcryptjs")

exports.hashPassword = async(req , res, next) =>{
    try {
        req.boby.password = await bcrypt.hash(req.boby.password , 8)
        next( )
    } catch (error) {
       console.log(error) 
       res.status(500).send({ message: "Check server logs" });
    }
};

exports.decryptPassword = async(req, res, next ) =>{
 try {
    req.user = await User.findOne({username: req.boby.username})
    if(await bcrypt.compare(req.boby.password, req.user.password)){
        next()
    }
    else{
        throw new Error ( )
    }
 } catch (error) {
    console.log(error) 
    res.status(500).send({ message: "Check Server Logs"})
 }
}