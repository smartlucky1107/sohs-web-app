import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  jobt: {
    type: String,
    required: true,
  },
  empno: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  fin: {
    type: String,
    required: true,
  },
  ypj: {
    type: String,
    required: true,
  },
  exp: {
    type: String,
    required: true,
  },
  hist: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  inf: {
    type: String,
    required: true,
  },
  notify: {
    type: String,
    required: true,
  },
  diag: {
    type: String,
    required: true,
  },
  stat: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
});

const Worker = mongoose.models.Worker || mongoose.model("Worker", workerSchema);

export default Worker;
