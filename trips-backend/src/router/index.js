import flightsRouter from './flights.router.js';

export default function configureRoutes(app) {
    app.use('/api/flights', flightsRouter);
}