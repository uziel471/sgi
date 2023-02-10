import mongoose, { Schema, Types } from 'mongoose';
import ContractorModel from './contractorModel';
import SuretyModel from './suretyModel';

export type Bond = {
  readonly _id: Types.ObjectId;
  contractorId: Types.ObjectId;
  suretyId: Types.ObjectId;
  number: string;
  amount: number;
  effectiveDate: Date;
  cancellationDate: Date;
};

const bondSchema = new Schema<Bond>({
  contractorId: {
    type: Schema.Types.ObjectId,
    ref: ContractorModel,
  },
  suretyId: {
    type: Schema.Types.ObjectId,
    ref: SuretyModel,
  },
  number: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  effectiveDate: {
    type: Date,
    required: true,
  },
  cancellationDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.models.bond || mongoose.model<Bond>('bond', bondSchema, 'bond');
