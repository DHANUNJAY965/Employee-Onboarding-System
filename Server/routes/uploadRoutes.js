const express = require('express');
const router = express.Router();
const { uploadFile } = require('../controllers/uploadController');
const upload = require('../middleware/upload');
const validateFileType = require('../middleware/validateFileType');

router.post('/image', upload.single('file'), validateFileType(['jpg', 'jpeg', 'png']), uploadFile);
router.post('/document', upload.single('file'), validateFileType(['pdf', 'doc', 'docx']), uploadFile);

module.exports = router;