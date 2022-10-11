const mongoose = require("mongoose");

const violationSchema = new mongoose.Schema({
  licensePlateNumber: { type: String, default: "" },
  violationType: { type: String, default: "" },
  status: {
    paid: { type: String, default: "" },
    unpaid: { type: String, default: "" },
  },
  date: { type: Number, default: "" },
  time: { type: Number, default: "" },
  location: { type: String, default: "" },
  videoUrl: { type: String, default: "" },
});

module.exports = mongoose.model("violationSchema", violationSchema);
