const express=require("express")
const router=express.Router()
const multer= require("multer")
const path = require("path")
//let {bookingForm}= require("../Controllers/BookingController")
const { createServices ,getServices} = require("../Controllers/ServiceController")



//-----------implementation of multer---------------------

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'images'),
    filename: function (req, file, cb) {
      // Generate a unique filename for each uploaded file
      const uniqueFileName = Date.now() + '-' + file.originalname;
      cb(null, uniqueFileName);
    },
  });
  
  const upload = multer({ storage: storage }); 

//-------------------------------------------------------

router.post("/services",upload.single('image'),createServices)//

router.get("/getServices/:serviceId",getServices)
// router.post("/form",bookingForm)



module.exports = router;