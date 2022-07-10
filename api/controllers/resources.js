import Resources from "../models/Resources.js";
import Offices from "../models/Offices.js";
import { createError } from "../utils/error.js";

//CREATE
export const createRresource = async (req, res, next) => {
  const officeId = req.params.officeid;
  const newResources = new Resources(req.body);

  try {
    const savedResources = await newResources.save();
    try {
      await Offices.findByIdAndUpdate(officeId, {
        $push: { resources: savedResources._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedResources);
  } catch (error) {
    next(error);
  }
};
//UPDATE 
export const updateResource = async (req, res, next) => {
  try {
    const updatedResources = await Offices.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedResources);
  } catch (error) {
    next(error);
  }
};

// AVAILABILITY
export const updateResourcesAvailability = async (req, res, next) => {
  try {
    await Resources.updateOne(
      { "resourcesNumbers._id": req.params.id },
      {
        $push: {
          "resourcesNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Room status has been updated.");
  } catch (error) {
    next(error);
  }
};
//DELETE
export const deleteResource = async (req, res, next) => {
  const officeId = req.params.officeid;
  try {
    await Resources.findByIdAndDelete(req.params.id);
    try {
      await Offices.findByIdAndUpdate(officeId, {
        $pull: { resources: req.params.id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json("Room has been deleted.");
  } catch (error) {
    next(error);
  }
};
//GET
export const getResource = async (req, res, next) => {
  try {
    const resources = await Resources.findById(req.params.id);
    res.status(200).json(resources);
  } catch (error) {
    next(error);
  }
};
//GET ALL
export const getResources = async (req, res, next) => {
  try {
    const resources = await Resources.find();
    res.status(200).json(resources);
  } catch (error) {
    next(error);
  }
};

