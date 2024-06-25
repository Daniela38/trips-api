
export default class FlightsRepository {
    constructor(dao) {
        this.dao = dao;
    }

    async getFlights() {
        return await this.dao.getFlights();
    }

    async createFlight(flight) {
        return await this.dao.createFlight(flight);
    }

    async getFlightById(id) {
        return await this.dao.getFlightById(id);
    }

    async getFlightsByCategory(categoryUrl) {
        return await this.dao.getFlightsByCategory(categoryUrl);
    }

    async updateFlight(id, newField) {
        return await this.dao.updateFlight(id, newField);
    }

    async deleteFlight(id) {
        return await this.dao.deleteFlight(id);
    }
}