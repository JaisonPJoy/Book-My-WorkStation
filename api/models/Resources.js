import mongoose from 'mongoose';
const { Schema } = mongoose;

const ResourcesSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    resourcesNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
},{ timestamps: true } )

export default mongoose.model("Resources", ResourcesSchema)