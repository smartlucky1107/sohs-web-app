import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  company_address: { type: String, required: true },
  name: { type: String, required: true },
  fin: { type: String, required: true },
  dob: { type: Date, required: true },
  sex: { type: String, required: true },
  empno: { type: String, required: true },
  date: { type: Date, required: true },
  jobt: { type: String, required: true },
  yrs_exposure: { type: String, required: true },
  dept: { type: String, required: true },
  ihd: { type: String, required: true },
  excessive_noise: { type: String, required: true },
  hearing_protectors: { type: String, required: true },
  air_l0_25: { type: String, required: true },
  air_l0_5: { type: String, required: true },
  air_l1: { type: String, required: true },
  air_l2: { type: String, required: true },
  air_l3: { type: String, required: true },
  air_l4: { type: String, required: true },
  air_l6: { type: String, required: true },
  air_l8: { type: String, required: true },
  bone_l0_25: { type: String, required: true },
  bone_l0_5: { type: String, required: true },
  bone_l1: { type: String, required: true },
  bone_l2: { type: String, required: true },
  bone_l3: { type: String, required: true },
  bone_l4: { type: String, required: true },
  bone_l6: { type: String, required: true },
  bone_l8: { type: String, required: true },
  air_r0_25: { type: String, required: true },
  air_r0_5: { type: String, required: true },
  air_r1: { type: String, required: true },
  air_r2: { type: String, required: true },
  air_r3: { type: String, required: true },
  air_r4: { type: String, required: true },
  air_r6: { type: String, required: true },
  air_r8: { type: String, required: true },
  bone_r0_25: { type: String, required: true },
  bone_r0_5: { type: String, required: true },
  bone_r1: { type: String, required: true },
  bone_r2: { type: String, required: true },
  bone_r3: { type: String, required: true },
  bone_r4: { type: String, required: true },
  bone_r6: { type: String, required: true },
  bone_r8: { type: String, required: true },
  name_and_signature: { type: String, required: true },
  date_tested: { type: Date, required: true },

  // Optional fields
  dwd_right: { type: String, required: false, default: "" },
  dwd_left: { type: String, required: false, default: "" },
  otoscopy_right: { type: String, required: false, default: "" },
  otoscopy_left: { type: String, required: false, default: "" },
  otoscopy_norma: { type: String, required: false, default: "" },
  otoscopy_wax_present: { type: String, required: false, default: "" },
  otoscopy_scarred_tm: { type: String, required: false, default: "" },
  otoscopy_tm_perforatio: { type: String, required: false, default: "" },
  diagnosis: { type: String, required: false, default: "" },
  action_plans: { type: String, required: false, default: "" },
  action_plans_text: { type: String, required: false, default: "" },
  certification: { type: String, required: false, default: "" },
});

const Test = mongoose.models.Test || mongoose.model("Test", testSchema);

export default Test;
