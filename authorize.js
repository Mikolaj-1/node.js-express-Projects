const autorize=(req,res,next)=>{
    const {user}=req.query
    if(user=="john"){
        req.user={user:"john",id:"3"}
        next()
    }
    else{
        res.status(401).send("unautorize")
    }
}

module.exports=autorize