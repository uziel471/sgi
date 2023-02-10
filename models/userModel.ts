import mongoose, { Schema, Types } from 'mongoose';

export type User = {
  readonly _id: Types.ObjectId;
  name: string;
  userName: string;
  email: string;
  password: string;
  lastLogin: Date;
};

const userSchema = new Schema<User>({
  name: String,
  userName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  lastLogin: {
    type: Date,
    required: false,
  },
});

export default mongoose.models.user || mongoose.model<User>('user', userSchema, 'user');
