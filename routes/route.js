const express = require('express');
const vehicleSchema = require('../models/vehicleModel');
const violationSchema = require('../models/violationModel')
const router = express.Router();

// API for get the details of a vehicle
router.get ("/getVehicleDetails", (req, res) => {
    vehicleSchema.find().then(details => {
        res.json ({details});
    })
})

//API for post the deatails of a vehicle
router.post("/createVehicleData", async (req, res)=> {

    const vehicleData = new vehicleSchema({

        licensePlateNumber: req. body.licensePlateNumber,
        violationType: req. body.manufacturerName,
        status: req. body.model,
        date: req. body.fuelType,
        time: req. body.ownerName,
        location: req. body.rc_status,
        videoUrl: req. body.vehicleColor,
    });

    try{
        const createVehicleDetails = await vehicleData.save();
        res.send('User Created Successfully')
    }
    catch(err){
        res.status(400).send(err);
    }


    //API for Update the deatails of a vehicle
  router.put("/update/:id", async(req, res) => {
    try{
        await vehicleSchema.findByIdAndUpdate(req.params._id, req.body);
        res.send("Vehicle Details Updated Successfully");
    }
    catch(err){
        res.status(400).send(err);
    }
  })  

 //API for delete the deatails of a vehicle
  router.delete("/delete/:id" ,async (req, res) => {
    await vehicleSchema.findOneAndDelete(req.params.id, (err)=>{
        if(err) {
            res.status(400).send(err);
        }

        res.send("Vehicle Details deleted successfully !")
    })
  })




// API for get the details of a violation
router.get ("/getViolationDetails", (req, res) => {
    violationSchema.find().then(result => {
        res.json ({result});
    })
})

//API for post the deatails of a vehicle
router.post("/createViolationData", async (req, res)=> {

    const violationData = new violationSchema({

        licensePlateNumber: req. body.licensePlateNumber,
        violationType: req. body.manufacturerName,
        status: req. body.model,
        date: req. body.fuelType,
        time: req. body.ownerName,
        location: req. body.rc_status,
        videoUrl: req. body.vehicleColor,
    });

    try{
        const createVehicleDetails = await violationData.save();
        res.send('User Created Successfully')
    }
    catch(err){
        res.status(400).send(err);
    }


    //API for Update the deatails of a vehicle
  router.put("/updateViolation/:id", async(req, res) => {
    try{
        await violationSchema.findByIdAndUpdate(req.params._id, req.body);
        res.send("Violation Details Updated Successfully");
    }
    catch(err){
        res.status(400).send(err);
    }
  })  

 //API for delete the deatails of a vehicle
  router.delete("/deleteViolation/:id" ,async (req, res) => {
    await violationSchema.findOneAndDelete(req.params.id, (err)=>{
        if(err) {
            res.status(400).send(err);
        }

        res.send("violation Details deleted successfully !")
    })
  })


})

})


module.exports = router