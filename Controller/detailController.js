const details=require('../model/detailSchema')


exports.getalldetails = async (req,res)=>{
    // logic
try{
   //get alldetails from details from collection in mongodb
  const alldetails = await details.find()
  res.status(200).json(alldetails)
}
catch(error){
res.status(401).json(error)
}
}
