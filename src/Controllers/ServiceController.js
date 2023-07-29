//const path = require('path');
 const mega= require("../mega")
 //const {uploadFileToMega}= require("../mega")
const serviceModel= require("../Models/ServicesModel")

//===========================create services=======================================================
const createServices= async function(req,res){
    try{
   let data= req.body
   //--------------------to upload the images------
   if (req.file) {
    const imageFilePath = req.file.path; // Path of the uploaded image in local storage

    // Upload the image to Mega using async/await
    try {
      const megaLink = await mega.uploadFileToMega(imageFilePath);
      data.imageMegaLink = megaLink; // Save the Mega link to the data object
    } catch (err) {
      console.error('Upload to Mega failed:', err);
      return res.status(500).json({ status: false, message: 'Upload to Mega failed' });
    }
  }



   //-----------------------------------------------
//    const imageFilePath = req.file.path; // Path of the uploaded image in local storage

//    //Upload the image to Mega
//    mega.uploadFileToMega(imageFilePath, async (err, megaLink) => {
//      if (err) {
//        console.error('Upload to Mega failed:', err);
//        return res.status(500).json({ status: false, message: 'Upload to Mega failed' });
//      }
 
//      // Save the Mega link to the data object or any relevant database field
//      data.imageMegaLink = megaLink;
//    })


   //---------------------------------------
   let createServices= await serviceModel.create(data)
   return res.status(201).send({status:true,data:createServices})
    
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}
//==============================================================================
//============================get all services=================================


const getServices= async function(req,res){
    try{
       let serviceId= req.params.serviceId
       let findService= await serviceModel.findOne({_id:serviceId})
       return res.status(200).send({status:true,data:findService})
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}


//==============================================================================

module.exports={createServices,getServices}
/*
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    service_items:[{
        service_title:{
            type:String,
            required:true
        },
        service_image:{
             type:String,
             required:true 
        },
        service_price:{
            type:Number,
            required:true
        },
        short_description:{
            type:String,
            required:true
        },
        long_description:{
            type:String,
            required:true
        }
    }],
    isAvailable:{
        type:Boolean,
        default:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})
*/