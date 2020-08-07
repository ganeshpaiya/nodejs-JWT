module.exports = liupload => {
    console.log('LIUploadroutes');
    const liuploadController = require("../../controllers/li/liupload.controller.js");
    const upload = require("../../middleware/excelupload");
   
    liupload.post("/api/li/liupload", upload.single("file"), liuploadController.upload, (req, res) => {

   });
}