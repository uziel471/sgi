import mongoose, { Schema, Types } from 'mongoose';
import ContractorModel from './contractorModel';
import SuretyModel from './suretyModel';

export type Workers = {
  readonly _id: Types.ObjectId;
  contractorId: Types.ObjectId;
  suretyId: Types.ObjectId;
  policyNumber: string;
  effectiveDate: Date;
  expirationDate: Date;
};

const workersSchema = new Schema<Workers>({
  contractorId: {
    type: Schema.Types.ObjectId,
    ref: ContractorModel,
  },
  suretyId: {
    type: Schema.Types.ObjectId,
    ref: SuretyModel,
  },
  policyNumber: {
    type: String,
    required: true,
  },
  effectiveDate: {
    type: Date,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.models.workers || mongoose.model<Workers>('workers', workersSchema, 'workers');
