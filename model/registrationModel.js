import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  admnNo: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
});

const Registration = mongoose.model("Registration", registrationSchema);
export default Registration;
