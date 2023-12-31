import { Schema, model, Types } from "mongoose";

let collection = 'users';

const schema = new Schema({
    name: {type: String, required: true},
    image:{type:String}
},{
    timestamps:true

});

const User = model(collection, schema);

export default User;