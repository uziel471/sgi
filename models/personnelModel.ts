import mongoose, { Schema, Types } from 'mongoose';
import ContractorModel from './contractorModel';

export type Personnel = {
  readonly _id: Types.ObjectId;
  contractorsId: Types.ObjectId;
  personnelName: string;
  personnelTitle: string;
  associationDate: Date;
};

const personnelSchema = new Schema<Personnel>({
  contractorsId: {
    type: Schema.Types.ObjectId,
    ref: ContractorModel,
  },
  personnelName: {
    type: String,
    required: true,
  },
  personnelTitle: {
    type: String,
    required: true,
  },
  associationDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export default mongoose.models.personnel || mongoose.model<Personnel>('personnel', personnelSchema, 'personnel');
