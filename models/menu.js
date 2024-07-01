import mongoose, { Schema, model, models } from 'mongoose'

const menuSchema = new Schema({
 title:{
    type: String,
    required: true,
 },
 description:{
    type: String,
    required: true,
 }

}, { timestamps: true })



export default mongoose.models.Menu || mongoose.model("Menu", menuSchema)

