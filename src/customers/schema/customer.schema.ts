import * as mongoose from 'mongoose';

export const customerSchema = new mongoose.Schema(
  {
    first_name: String,
    last_nae: String,
    email: String,
    phone: String,
    address: String,
    description: String,
    test_date: Date,
  },
  {
    timeseries: {
      timeField: 'test_date',
      metaField: 'date',
      granularity: 'seconds',
    },
    timestamps: true,
  },
);
