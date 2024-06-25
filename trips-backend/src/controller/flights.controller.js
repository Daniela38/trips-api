import FlightsService from "../services/flights.service.js";

const flightsService = new FlightsService();

async function getFlights(req, res) {
    try {
        const flights = await flightsService.getFlights();
        res.status(200).send(flights);
    } catch(error) {
        res.status(500).send(`Internal Server Error ${error.message}`);
    }
}

async function getFlightById(req, res) {
    try {
        const flight = await flightsService.getFlightById(req.params.id);
        res.status(200).send(flight);
    } catch(error) {
        res.status(500).send(`Internal Server Error ${error.message}`);
    }
}

async function getFlighstByCategory(req, res) {
    try {
        const flights = await flightsService.getFlightsByCategory(req.params.categoryUrl);
        res.status(200).send(flights);
    } catch(error) {
        res.status(500).send(`Internal Server Error ${error.message}`);
    }
}

async function addFlight(req, res) {
    try {
        const newFlight = await flightsService.addFlight(req.body);
        res.status(200).send({message: 'Flight added', flight: newFlight});
    } catch(error) {
        console.log(error)
        res.status(500).send(`Internal Server Error: ${error.message}`);
    }
}

async function updateFlight(req, res) {
    try {
        const updatedFlight = await flightsService.updateFlight(req.params.id, req.body);
        res.status(200).send({message: 'Flight updated', flight: updatedFlight});
    } catch(error) {
        console.log(error);
        res.status(500).send(`Internal Server Error: ${error.message}`);
    }
}

async function deleteFlight(req, res) {
    try {
        const deletedFlight = await flightsService.deleteFlight(req.params.id);
        res.status(200).send({message: 'Flight deleted', flight: deletedFlight});
    } catch(error) {
        res.status(500).send(`Internal Server Error: ${error.message}`);
    }
}

const checkAdmin = async(req, res, next) => {
    const user = req.user.user;
    console.log(JSON.stringify(user));
    console.log("El rol del usuario es: " + user.role)
    if(user.role === 'admin') {
        next();
    } else {
        res.status(401).send('Error: you do not have permissions to perform this action');
    }
}

export default {
    getFlights,
    getFlightById,
    getFlighstByCategory,
    addFlight,
    updateFlight,
    deleteFlight,
    checkAdmin
}