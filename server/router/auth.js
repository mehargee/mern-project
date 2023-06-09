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

        const userExist = await User.findOne({ email: email }) //is email ka sara data aa gya ha
        if (userExist) {

            return res.status(422).json({error: "Email already exist"});
        }
        else if (password != cpassword) {
            return res.status(422).json({error: "password are not matching"});
        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword }); //key:value

            await user.save();

            res.status(201).json({ message: "user register sucessfully" });
            console.log("user register sucessfully..");
        }

    }
    catch (error) {
        console.log("error", error);

    }

});

router.post('/signin', async (req, res) => {

    const { email, password } = req.body;
    // const email = req.body.email;
    // const password = req.body.password;

    try {
        if (!email || !password) {
            return res.status(400).json({error: "fill the both fields"});
        }

        const userLogin = await User.findOne({ email: email })

        if (!userLogin) {

            return res.status(400).json({ error: "user invalid" })

        } else {

            return res.status(200).json({ message: "user login sucessfully" })
            console.log("user login sucessfully");
        }




    } catch (error) {
        console.log("error", error);
        res.status(500).json({ error: "error" })
    }


});

module.exports = router;