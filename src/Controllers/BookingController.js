
const bookingForm= async function(req,res){
    try{

         res.status(200).send("success")
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}

module.exports={bookingForm}