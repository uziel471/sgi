import mongoose, { Schema, Types } from 'mongoose';
import UserModel from './userModel';

export type Contractors = {
  readonly _id: Types.ObjectId;
  businessName: string;
  address: string;
  cityName: string;
  stateName: string;
  zipCode: string;
  phoneNumber: string;
  entityType: string;
  licenseStatus: string;
  issueDate: Date;
  expireDate: Date;
  lastUserModified: Types.ObjectId;
  lastTimeModified: Date;
  licenseNumber: string;
};

const contractorsSchema = new Schema<Contractors>({
  businessName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cityName: {
    type: String,
    required: true,
  },
  stateName: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  entityType: {
    type: String,
    required: true,
  },
  licenseStatus: {
    type: String,
    required: true,
  },
  issueDate: {
    type: Date,
    required: true,
  },
  expireDate: {
    type: Date,
    required: true,
  },
  lastUserModified: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
  },
  lastTimeModified: {
    type: Date,
    default: Date.now,
  },
  licenseNumber: {
    type: String,
    required: true,
  },
});

export default mongoose.models.contractors || mongoose.model<Contractors>('contractors', contractorsSchema, 'contractors');
