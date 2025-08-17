import mongoose from 'mongoose';
const InterviewSessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  role: String,
  questions: [String],
  answers: [String],
  feedback: String
}, { timestamps: true });
export default mongoose.model('InterviewSession', InterviewSessionSchema);