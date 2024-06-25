import mongoose from "mongoose";

export const flightsCollection = "Flights";

const flightsSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    route: {
        type: String,
        required: true
    },
    airports: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    departureTime: {
        type: String,
        required: true
    },
    arrivalTime: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
})

export const FlightsModel = mongoose.model(flightsCollection, flightsSchema);
export default FlightsModel;