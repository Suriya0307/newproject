const express = require("express")
const mongoose = require("mongoose")

const app = express()

// CONNECT TO MONGODB
mongoose.connect("mongodb://127.0.0.1:27017/vehicle_management")
.then(() => {
    console.log("MongoDB Connected")
})
.catch((error) => {
    console.log(error)
})


// SCHEMA
const vehicleSchema = new mongoose.Schema({
    Car_Name: String,
    Year: Number,
    Selling_Price: Number,
    Present_Price: Number,
    Kms_Driven: Number,
    Fuel_Type: String,
    Seller_Type: String,
    Transmission: String,
    Owner: Number
})


// MODEL
const Vehicle = mongoose.model("vehicles", vehicleSchema)


// API ROUTE
app.get("/vehicles", async (req, res) => {

    const vehicles = await Vehicle.find()   

    res.json(vehicles)
})


// SERVER
app.listen(3000, () => {
    console.log("Server running on port 3000")
})