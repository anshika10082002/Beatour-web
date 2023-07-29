const mongoose= required("mongoose")

const BookingSchema= new mongoose.Schema({
       fullName:{
        type:String,
        required:true
       },
       email:{
        type:String,
        required:true
       },
       phone:{
        type:Number,
        required:true
       },
       booking_services:[{
              name:{
                type:String,
                required:true
              },
              price:{
                type:Number,
                required:true
              }
       }],
       total_price:{
        type:Number,
        required:true
       },
       date:{
        type:Date,     
       },
       time_slot:{
        type:Date
       }
})

module.exports= mongoose.model("BookingData",BookingSchema)