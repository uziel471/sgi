import mongoose, { Schema, Types } from 'mongoose';

export type Surety = {
  readonly _id: Types.ObjectId;
  name: string;
  address: string;
  phoneNumber: string;
  suretyCode: string;
};

const suretySchema = new Schema<Surety>({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  suretyCode: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.models.surety || mongoose.model<Surety>('surety', suretySchema, 'surety');
