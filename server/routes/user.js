const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
router.use(cors())
const router = express.Router();
const UserModel = require('../models/mongo');
const nodemailer=require('nodemailer')
const dotenv=require('dotenv')
const crypto = require('crypto');
dotenv.config()
router.post('/createacc', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });

        if (user) {
            res.json("exists"); 
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new UserModel({
                username,
                email,
                password: hashedPassword
            });

            await newUser.save();
           res.json("not exists"); 
        }
    } catch (error) {
        console.log(error);
    }
});

router.post('/signinaccount', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            res.json("not exists")
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
           res.json("incorrect password")
        }
        else{
            res.json("exists")
        }
         
    } catch (error) {
        console.log(error);
    }
});
router.post("/Forgotpassword",async (req,res) =>{
    const {email}=req.body
    try{
const user=await UserModel.findOne({email})
if(!user){
    res.json("not registered")
}
const resetToken = crypto.randomBytes(32).toString('hex');
        const resetTokenExpiry = Date.now() + 3600000; 
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = resetTokenExpiry;
        await user.save();

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.GMAIL_USER,
        pass:process.env.GMAIL_PASS
    }
})
transporter.verify((err,success)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Nodemailer connected");
    }
})
const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`;

let mailOptions={
    from:process.env.GMAIL_USER,
    to:email,
    subject:'Reset password',
    text:`You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
    Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n
    ${resetUrl}\n\n
    If you did not request this, please ignore this email and your password will remain unchanged.\n`
}
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return res.status(500).json({ error: 'Error sending email' });
    } else {
        res.json({ message: 'Email sent successfully', info });
    }
});
    }
    catch(e){
        console.log(e)
    }
})
router.post('/resetpassword/:token', async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    try {
        console.log(`Finding user with token: ${token}`);
        const user = await UserModel.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() } 
        });

        if (!user) {
            
            return res.status(400).json({ status: false, message: "Password reset token is invalid or has expired" });
        }

        console.log("User found, updating password");
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.json({ status: true, message: "Password has been changed successfully" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
});



module.exports = router;
