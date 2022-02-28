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

    console.log(req.file);

    // const up_options = {
    //     resource_type: "image",
    //     folder: "nuxtjs-image-upload-analysis",
    //     quality_analysis: true
    // };

    // const response = await cloudinary.v2.uploader.upload(
    //     req.file.path,
    //     up_options
    // );

    const response = {
        asset_id: '4cca044d4abbc1b54b3cae91b3f2b0fb',
        public_id: 'nuxtjs-image-upload-analysis/ugpx1mrg8igfgm2d4tg8',
        version: 1646043524,
        version_id: '4b7ffb58426465cafc585a52324305cb',
        signature: 'de05b8691964754256c8659ed0bd2d768e581620',
        width: 2880,
        height: 954,
        format: 'png',
        resource_type: 'image',
        created_at: '2022-02-28T10:18:44Z',
        tags: [],
        pages: 1,
        bytes: 265326,
        type: 'upload',
        etag: 'f49daa1dfb09a1c057a0d687c66a57aa',
        placeholder: false,
        url: 'http://res.cloudinary.com/hackit-africa/image/upload/v1646043524/nuxtjs-image-upload-analysis/ugpx1mrg8igfgm2d4tg8.png',
        secure_url: 'https://res.cloudinary.com/hackit-africa/image/upload/v1646043524/nuxtjs-image-upload-analysis/ugpx1mrg8igfgm2d4tg8.png',
        access_mode: 'public',
        quality_analysis: {
            focus: 1,
            noise: 1,
            contrast: 1,
            exposure: 1,
            saturation: 1,
            lighting: 1,
            pixel_score: 0.73,
            color_score: 1,
            dct: 0.94,
            blockiness: 0.48,
            chroma_subsampling: 0.61,
            resolution: 0.88
        },
        quality_score: 0.82,
        original_filename: 'a761a32919b6ce6d41e2d3134d49946a',
        api_key: '725464419265614'
    };

    console.log(response);

    let backURL = req.header('Referer') || '/';

    backURL += "?uploading=true";

    res.redirect(backURL);
});

module.exports = app