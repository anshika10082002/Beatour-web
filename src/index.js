let express= require("express")
const mongoose= require("mongoose")
let app = express()
let route= require("./Routes/Route")
//let multer= require("multer")
let cors= require("cors")

app.use(express.json())

app.use(cors())
//----------------------implementation of multer----------------------------
 //app.use(multer().any())
//----------

// const storage = multer.diskStorage({
//     destination: path.join(__dirname, 'images'),
//     filename: function (req, file, cb) {
//       // Generate a unique filename for each uploaded file
//       const uniqueFileName = Date.now() + '-' + file.originalname;
//       cb(null, uniqueFileName);
//     },
//   });
  
//   const upload = multer({ storage: storage });


//---------------------------------------------------
mongoose.connect("mongodb+srv://Anshika:anshika2003@cluster0.ajpkc5u.mongodb.net/Beatour-data",
    {useNewUrlParser:true}
)
.then(()=>console.log("db is connected"))
.catch((err)=>console.log(err.message))

app.use("/", route)

app.listen(process.env.PORT || 3001, function(){
    console.log("running on port" +(process.env.PORT || 3001) )
})