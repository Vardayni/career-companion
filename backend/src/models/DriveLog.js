import mongoose from 'mongoose';
const DriveLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  driveId: { type: mongoose.Schema.Types.ObjectId, ref: 'Drive' },
  attendedOn: Date,
  feedback: String,
  outcome: { type: String, enum: ['Selected','Rejected','Awaiting'] },
  attachments: [String]
}, { timestamps: true });
export default mongoose.model('DriveLog', DriveLogSchema);