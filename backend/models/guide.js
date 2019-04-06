// model/guide.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const GuideSchema = new Schema({
  category: String,
  sections: {String}
}, { timestamps: true });

export default mongoose.model('Guide', GuideSchema, 'Guide');
