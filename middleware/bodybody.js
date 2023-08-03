const bodybody = (req, res, next)=>{
    console.log(req.body);
    next();
}

module.exports = bodybody;