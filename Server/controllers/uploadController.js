const cloudinary = require('../config/cloudinary');
const asyncHandler = require('../utils/asyncHandler');

exports.uploadFile = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: 'Please upload a file'
    });
  }

  const result = await cloudinary.uploader.upload(req.file.path, {
    resource_type: 'auto',
    folder: 'employee-documents'
  });

  res.status(200).json({
    success: true,
    url: result.secure_url
  });
});
