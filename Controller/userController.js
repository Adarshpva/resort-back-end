// import model
const users = require('../model/userSchema')



exports.register =async (req,res)=>{
    // get other user input from req body
    const {name,mobile,address,id} = req.body
    if(!name || !mobile || !address || !id){
        res.status(403).json("All Input Are Required!!!")
    }
    try{
    // check existing employees
    const preuser = await  users.findOne({name})
    if(preuser){
        res.status(406).json("user already exist")
    }
    else{
        // register user to db
        const newuser = new users({
            name,
            mobile,
            address,
            id
        })
        // db save
       await newuser.save()
       res.status(200).json(newuser)
    }
    }
    catch(error){
        res.status(401).json(error)
    }
}

