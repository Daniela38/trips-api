import { FlightsDaoFactory } from "../dao/factory.js";
import FlightsRepository from "./flights.repository.js";

const flightsManager = FlightsDaoFactory.getDao();

export const flightsRepository = new FlightsRepository(flightsManager); 