import mongoose from 'mongoose';
const ResumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: Object, // JSON structure of resume
  score: Number,
  tips: [String]
}, { timestamps: true });
export default mongoose.model('Resume', ResumeSchema);