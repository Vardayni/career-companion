import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, index: true },
  name: String,
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('User', UserSchema);