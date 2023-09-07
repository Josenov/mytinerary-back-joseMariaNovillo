import { Schema, model, Types } from "mongoose";

let collection = 'users';

const schema = new Schema({
    name: {type: String, required: true},
    image:{type:String},
    role:{type: String, required:true},
    cities:[{type:Types.ObjectId, ref:'cities'}],
    itineraries:[{type:Types.ObjectId, ref:'itineraries'}]
},

{
    timestamps:true

});

const User = model(collection, schema);

export default User;