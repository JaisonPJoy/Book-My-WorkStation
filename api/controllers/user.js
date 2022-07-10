import Users from "../models/Users.js";

// CREATE USER
// export const createUser = async(req, res, next) => {
//     const newUser = new Users(req.body);

//     try {
//         const saveduser = await newUser.save();
//         res.status(200).json(saveduser);
//     } catch (error) {
//         next(error);
//     }
// }

//UPDATE USER
export const updateUser = async(req, res, next) => {
    // cons newUser = new Users(req.body);

    try {
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, { $set: req.body }, { new : true });
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
}
//DELETE USER
export const deleteUser = async(req, res, next) => {
    try {
        await Users.findByIdAndDelete(req.params.id);
        res.status(200).json("Office has been deleted");
    } catch (error) {
        next(error);
    }
}
//GET USER
export const getUser = async(req, res, next) => {
    try {
        const user = await Users.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}
//GET ALL USERS
export const getUsers = async(req, res, next) => {
    try {
        const users = await Users.find();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

