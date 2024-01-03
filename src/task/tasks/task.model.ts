import * as mongoose from 'mongoose';


export const TaskSchema = new mongoose.Schema({
    // id:String,
    name:String,
    home:String,
    title: String,
    description: String,
  });
  
  export interface Task extends mongoose.Document {
    id: string;
    name:String,
    home:String,
    title: string;
    description: string;
  }