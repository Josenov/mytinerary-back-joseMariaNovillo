import { Schema, model, Types } from "mongoose";

let collection = 'users';

const schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    image:{type:String},
    online:{type:Boolean, default:false},
    verified:{type:Boolean, default:true},
    verified_code:{type:String},
    cities:[{type:Types.ObjectId, ref:'cities'}],
    itineraries:[{type:Types.ObjectId, ref:'itineraries'}]
},

{
    timestamps:true

});

const User = model(collection, schema);

export default User;