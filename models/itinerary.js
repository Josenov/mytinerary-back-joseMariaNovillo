import { Schema, model, Types } from "mongoose";

let collection = "itineraries";

let itinerarySchema = new Schema({
    price:{type:Number, required:true},
    duration:{type:Number, required:true},
    likes:{type:Number, required:true},
    hashtags:[{type:String, required:true}],
    comments:[{type:String, required:true}],
    user:{type:Types.ObjectId, ref:'users'}
    

},{
    timestamps:true
}
)


const itinerary = model(collection, itinerarySchema)

export default itinerary
