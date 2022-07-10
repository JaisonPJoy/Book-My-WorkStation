import Users from "../models/Users.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

//REGISTER
export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new Users({
            name:req.body.name,
            email:req.body.email,
            password:hash,
            department:req.body.department,
            designation:req.body.designation,
        })
        await newUser.save();
        res.status(200).send("User has been created");
    } catch (error) {
        next(error);
    }
}
//LOGIN
export const login = async(req, res, next) => {
    try {
        const user = await Users.findOne({email:req.body.email});
        if(!user) 
            return next(createError(404, "User not found!"));

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect) 
            return next(createError(400, "Wrong email or password!"));

        const token = jwt.sign({ id : user._id, isAdmin : user.isAdmin, isLead : user.isLead }, process.env.JWT);
        
        const {password, isAdmin, isLead, ...otherDetails} = user._doc;
        res.cookie("access_token", token, {
            httpOnly : true,
        }).status(200).json({...otherDetails});
    } catch (error) {
        next(error);
    }
}