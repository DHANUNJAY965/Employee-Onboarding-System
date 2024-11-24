const path = require('path');
const validateFileType = (allowedTypes) => {
    return (req, res, next) => {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'Please upload a file'
        });
      }
  
      const fileType = req.file.mimetype.split('/')[0];
      const fileExtension = path.extname(req.file.originalname).toLowerCase();
      console.log('File Type:', fileType);         
console.log('File Extension:', fileExtension); 
      
      if (fileType === 'image' && allowedTypes.includes(fileExtension.slice(1))) {
        return next();
      }
      
      if (allowedTypes.includes('pdf') && fileExtension === '.pdf') {
        return next();
      }
      
      if ((allowedTypes.includes('doc') || allowedTypes.includes('docx')) && 
          (fileExtension === '.doc' || fileExtension === '.docx')) {
        return next();
      }
  
      return res.status(400).json({
        success: false,
        message: 'Invalid file type'
      });
    };
  };
  
  module.exports = validateFileType;
  