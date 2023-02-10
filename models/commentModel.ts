import mongoose, { Schema, Types } from 'mongoose';
import UserModel from './userModel';
import ContractorModel from './contractorModel';

export type Comment = {
  readonly _id: Types.ObjectId;
  contractorsId: Types.ObjectId;
  userId: Types.ObjectId;
  comment: string;
  createdAt: Date;
  lastModified: Date;
};

const commentSchema = new Schema<Comment>({
  contractorsId: {
    type: Schema.Types.ObjectId,
    ref: ContractorModel,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
  },
  comment: {
    type: String,
    required: true,
    max: 500,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.comment || mongoose.model<Comment>('comment', commentSchema, 'comment');
