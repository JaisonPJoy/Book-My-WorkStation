import mongoose from 'mongoose';
const { Schema } = mongoose;

const OfficeSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    city: {
        type : String,
        required : true,
    },
    address: {
        type : String,
        required : true,

    },
    images: {
        type : [String],
    },
    resources: {
        type : [String],
    },
});

export default mongoose.model("Offices", OfficeSchema)
