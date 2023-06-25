// import multer
const multer = require('multer')

// using multer define storage
const storage = multer.diskStorage({
    destination:(req,res,callback)=>{
        callback(null,'')
    }
})



// define upload
const upload= multer({
    storage
})
module.exports=upload