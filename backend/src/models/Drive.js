import mongoose from 'mongoose';
const DriveSchema = new mongoose.Schema({
  company: String,
  role: String,
  location: String,
  dateTime: Date,
  eligibility: String,
  details: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });
export default mongoose.model('Drive', DriveSchema);