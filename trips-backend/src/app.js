import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import initializePassport from './config/passport.config.js';
import routes from './router/index.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('secret_cookie'));

app.use(session({
    secret: 'secret_trips_api',
    resave: true,
    saveUninitialized: true
}))
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('¡Hola mundo!');
});

mongoose.connect('mongodb+srv://danizaccarello:d9UN99o3YllTF4Hz@trips.x0squtx.mongodb.net/trips', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((conn) => {
    console.log('Connected to mongoDB');
}).catch((err) => {
    console.log('Error');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});

routes(app);