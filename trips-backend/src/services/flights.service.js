import { flightsRepository } from "../repositories/index.js";

export default class FlightsService {
    constructor() {
        this.flightsRepository = flightsRepository; 
    }

    async getFlights() {
        return await this.flightsRepository.getFlights();
    }

    async getFlightById(id) {
        try {
            const flight = await this.flightsRepository.getFlightById(id);
            if(!flight) {
                throw new Error('Flight not found');
            }
            return flight;
        } catch(error) {
            throw error;
        }
    }

    async getFlightsByCategory(categoryUrl) {
        try {
            return await this.flightsRepository.getFlightsByCategory(categoryUrl);
        } catch(error) {
            throw new Error(error.message);
        }
    }

    async addFlight(bodyFlight) {
        try {
            return await flightsRepository.createFlight(bodyFlight);
        } catch(error) {
            throw new Error(error.message);
        }
    }

    async updateFlight(id, newField) {
        return await flightsRepository.updateFlight(id, newField);
    }

    async deleteFlight(id) {
        return await flightsRepository.deleteFlight(id);
    }
}