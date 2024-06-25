import FlightsModel from '../models/flights.model.js';

export default class FlightsManager {
    constructor() {
        this.flightsModel = FlightsModel;
    }

    async getFlights() {
        try{
            return await this.flightsModel.find();
        } catch(error){
            throw new Error;
        }
    }

    async createFlight(bodyFlight) {
        try{
            return await this.flightsModel.create(bodyFlight);
        } catch(error){
            throw new Error;
        }
    }

    async getFlightById(id) {
        try{
            return await this.flightsModel.findById(id);
        } catch(error){
            throw new Error;
        }
    }

    async getFlightsByCategory(categoryUrl) {
        try{
            return await this.flightsModel.find( {category: categoryUrl} );
        } catch(error) {
            throw new Error;
        }
    }

    async deleteFlight(id) {
        try{
            return await this.flightsModel.deleteOne({_id: id});
        } catch(error){
            throw new Error;
        }
    }

    async updateFlight(id, updatedBodyFlight) {
        try{
            return await this.flightsModel.updateOne({_id: id}, updatedBodyFlight);
        } catch(error){
            console.log(error);
            throw new Error;
        }
    }
}