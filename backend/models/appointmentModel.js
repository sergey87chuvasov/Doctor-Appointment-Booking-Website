import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  docId: { type: String, required: true },
  slotDate: { type: String, required: true },
  slotTime: { type: String, required: true },
  userData: { type: Object, required: true },
  docData: { type: Object, required: true },
  amount: { type: Number, required: true },
  date: { type: Number, required: true },
  cancelled: { type: Bollean, required: true },
  payment: { type: Boolean, default: false },
  isCompleted: { type: Bollean, default: false },
});

const appointmentModel =
  mongoose.models.appointtment ||
  mongoose.model('appointment', appointmentSchema);

export default appointmentModel;
