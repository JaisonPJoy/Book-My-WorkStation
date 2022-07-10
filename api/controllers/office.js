import Offices from "../models/Offices.js";
import Resources from "../models/Resources.js";
import resources from "../models/Resources.js";

//CREATE OFFICE
export const createOffice = async(req, res, next) => {
    const newOffices = new Offices(req.body);

    try {
        const savedOffice = await newOffices.save();
        res.status(200).json(savedOffice);
    } catch (error) {
        next(error);
    }
}
//UPDATE OFFICE
export const updateOffice = async(req, res, next) => {
    const newOffices = new Offices(req.body);

    try {
        const updatedOffice = await Offices.findByIdAndUpdate(req.params.id, { $set: req.body }, { new : true });
        res.status(200).json(updatedOffice);
    } catch (error) {
        next(error);
    }
}
//DELETE OFFICE
export const deleteOffice = async(req, res, next) => {
    try {
        await Offices.findByIdAndDelete(req.params.id);
        res.status(200).json("Office has been deleted");
    } catch (error) {
        next(error);
    }
}
//GET OFFICE
export const getOffice = async(req, res, next) => {
    try {
        const office = await Offices.findById(req.params.id);
        res.status(200).json(office);
    } catch (error) {
        next(error);
    }
}
//GET ALL OFFICE
export const getOffices = async(req, res, next) => {
    try {
        const offices = await Offices.find(req.query);
        res.status(200).json(offices);
    } catch (error) {
        next(error);
    }
}

//GET SEAT
export const getOfficeResources = async (req, res, next) => {
    try {
        const office = await Offices.findById(req.params.id);
        const list = await Promise.all(office.resources.map((resource)=> {
            return Resources.findById(resource);
        })
    );
    res.status(200).json(list)
    }catch (error){
        next(error);
    }
}