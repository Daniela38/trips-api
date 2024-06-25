import FlightsManager from "./managers/flights.manager.js";

export class FlightsDaoFactory {
    static getDao() {
        return new FlightsManager;
    }
}