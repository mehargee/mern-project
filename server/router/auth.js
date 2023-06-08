const express = require("express");
const router = express.Router();

const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send("Hello from the MERN Home router js page");
});

router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;
    
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "filled the all field" })
    }

    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json("Email already exist");
        }

        const user = new User({ name, email, phone, work, password, cpassword }); //key:value
        await user.save();

    }
    catch (error) {
        console.log("error", error);

    }

});


module.exports = router;