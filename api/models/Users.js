import mongoose from 'mongoose';
const { Schema } = mongoose;

const UsersSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    department : {
        type : String,
        required : true,
    },
    designation : {
        type : String,
        required : true,
    },
    project : {
        type : String,
    },
    isAdmin : {
        type : Boolean,
        default : false,
    },
    isLead : {
        type : Boolean,
        default : false,
    }
},
    {timestamps : true}
);

export default mongoose.model("Users", UsersSchema)
