import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema(
  {
    passId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    name: {
      type: String,
      required: [true, 'Participant name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    college: {
      type: String,
      required: [true, 'Institution name is required'],
      trim: true,
    },
    event: {
      type: String,
      required: [true, 'Event track selection is required'],
      trim: true,
    },
    day: {
      type: String,
      enum: ['Day 1', 'Day 2'],
      default: 'Day 1',
    },
    trackType: {
      type: String,
      enum: ['Technical', 'Non-Technical'],
      default: 'Technical',
    },
    status: {
      type: String,
      enum: ['Confirmed', 'Pending', 'Checked-In'],
      default: 'Confirmed',
    },
    qrCodeString: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Registration = mongoose.model('Registration', registrationSchema);
export default Registration;
