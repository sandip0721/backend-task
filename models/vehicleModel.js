const mongoose = require ('mongoose');

const vehicleSchema = new mongoose.Schema({
    
        licensePlateNumber:{ type: String, default: "" },
        manufacturerName: { type: String, default: "" },
        model: { type: String, default: "" },
        fuelType: {
            petrol: { type: String, default: "" },
            desiel: { type: String, default: "" },
            electric: { type: String, default: "" }
        },
        ownerName:{ type: String, default: "" },
        rc_status: {
          Active:  { type: String, default: "" },
          Inactive : { type: String, default: "" }
        },
        vehicleColor: { type: String, default: "" },
        registrationDate: { type: String, default: "" },
        insuranceUpto: { type: String, default: "" },
        fitnessUpto: { type: String, default: "" },
        roadTaxUpto: { type: String, default: "" } 
        
})

module.exports = mongoose.model("vehicleSchema", vehicleSchema);