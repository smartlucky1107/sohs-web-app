import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  jobt: {
    type: String,
    required: false,
  },
  empno: {
    type: String,
    required: false,
  },
  dob: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: false,
  },
  fin: {
    type: String,
    required: false,
  },
  ypj: {
    type: String,
    required: false,
  },
  exp: {
    type: String,
    required: false,
  },
  hist: {
    type: String,
    required: false,
  },
  dept: {
    type: String,
    required: false,
  },
  company_address: {
    type: String,
    required: false,
  },
  inf: {
    type: String,
    required: false,
  },
  notify: {
    type: String,
    required: false,
  },
  diag: {
    type: String,
    required: false,
  },
  stat: {
    type: String,
    required: false,
  },
  sex: {
    type: String,
    required: false,
  },
});

const Worker = mongoose.models.Worker || mongoose.model("Worker", workerSchema);

export default Worker;
