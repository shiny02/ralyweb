// model/guide.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const CategorySchema = new Schema({
  name: String,
  subcategories: [String],
}, { timestamps: true });

export default mongoose.model('Category', CategorySchema);
