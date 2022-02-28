require('dotenv').config()

const app = require('express')()

const cloudinary = require('cloudinary');

const multer = require('multer')

const upload = multer({ dest: 'uploads/' });


cloudinary.config({
    cloud_name: process.env.NUXT_ENV_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

app.post('/upload', upload.single('file'), async (req, res) => {


    const up_options = {
        resource_type: "image",
        folder: "nuxtjs-image-upload-analysis",
        quality_analysis: true
    };

    const response = await cloudinary.v2.uploader.upload(
        req.file.path,
        up_options
    );

    res.json(response);
});

module.exports = app