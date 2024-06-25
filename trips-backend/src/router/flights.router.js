import { Router } from "express";
import flightController from '../controller/flights.controller.js';
import sessionsController from "../controller/sessions.controller.js";
import passport from "passport";

const router = Router();

router.get('/', flightController.getFlights);
router.get('/categories/:categoryUrl/:id', flightController.getFlightById);
router.get('/categories/:categoryUrl', flightController.getFlighstByCategory);
router.post('/', passport.authenticate('current'), flightController.checkAdmin, flightController.addFlight);
router.put('/:id', passport.authenticate('current'), flightController.checkAdmin, flightController.updateFlight);
router.delete('/:id', passport.authenticate('current'), flightController.checkAdmin, flightController.deleteFlight);

router.post('/register', passport.authenticate('register', {session: false}), sessionsController.register);
router.post('/login', passport.authenticate('login'), sessionsController.login);
router.get('/current', passport.authenticate('current', {session: false}), sessionsController.current);

export default router;