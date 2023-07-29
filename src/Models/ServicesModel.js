const mongoose= require("mongoose")

const ServicesSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        // required:true
    },
    service_items:[
    {
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
        },
    }
],

    isAvailable:{
        type:Boolean,
        default:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})

module.exports= mongoose.model("Service",ServicesSchema)
