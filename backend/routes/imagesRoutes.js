const cloudinary = require('cloudinary');
const router = require('express').Router();
require('dotenv').config();

cloudinary.config({
    cloud_name: "dfwhhqub0",
    api_key: "438742681752867",
    api_secret: "rnbHrnW9J9qKvv0i2pr4HNCZOEc"
})

router.delete('/:public_id', async(req,res)=> {
    const {public_id} = req.params;
    try {
        await cloudinary.uploader.destroy(public_id);
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e.message);
    }
})

module.exports = router;