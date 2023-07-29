const Mega= require("megajs")
const config= require("../config")
const path= require("path")
//const fs= require("fs")


const email= config.mega.email
const password= config.mega.password
//----------------------------------------------------------------

// Mega storage setup
const storage = new Mega.Storage({ email, password });

function uploadFileToMega(filePath) {
    return new Promise((resolve,reject)=>{
  const fileName = path.basename(filePath);

  // Upload the file to Mega
  const storageRoot = storage.root;
  const fileAttributes = { name: fileName };   
  const uploadStream = storageRoot.upload(fileAttributes, filePath);

  uploadStream.on('error', (err) => {
    //console.error(`Upload of ${fileName} failed:`, err);
    // if(callback)callback(err);
    reject(err)
  });

  uploadStream.on('complete', (file) => {
    //console.log(`Upload of ${file.name} complete. Mega file link: ${file.link}`);
    //if(callback) callback(null, file.link); // Pass the Mega file link to the callback
    resolve(file.link)
  });
})
}

module.exports = { uploadFileToMega };





//----------------------------------------------------------------------------------------------------------------
// const imagesFolderPath= path.join(__dirname,"images")

// const storageMega = new Mega.Storage({ email, password });

// fs.readdir(imagesFolderPath, (err, files) => {
//     if (err) {
//       console.error('Error reading images folder:', err);
//       return res.status(500).json({ error: 'Error reading images folder' });
//     }

//     // Upload each file to Mega
//     files.forEach((file) => {
//         const filePath = path.join(imagesFolderPath, file);
  
//         // Upload the file to Mega
//         const storageRoot = storageMega.root;
//         const fileAttributes = { name: file };
//         const uploadStream = storageRoot.upload(fileAttributes, filePath);
  
//         uploadStream.on('error', (err) => {
//           console.error(`Upload of ${file} failed:`, err);
//         });

//         uploadStream.on('complete', (file) => {
//             console.log(`Upload of ${file.name} complete. Mega file link: ${file.link}`);
//           });
//         });
    
//         res.json({ message: 'Image(s) uploaded successfully.' });
//       });
   
//     // module.exports= 