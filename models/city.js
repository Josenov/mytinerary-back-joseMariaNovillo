import { Schema, model, Types } from "mongoose";

let collection = 'cities';

let schema = new Schema({
    title:{type:String, required:true},
    city:{type:String, required:true},
    country:{type:String, required:true},
    url:{type:String, required:true},
    user:{type:Types.ObjectId, ref:'users'}

},{
    timestamps:true
}
)


const city = model(collection, schema)

export default city


/* title: "Destination1",
    city: "Bangkok",
    country: "Thailand",
    url: "https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg?impolicy=fcrop&w=800&h=533&q=medium" */