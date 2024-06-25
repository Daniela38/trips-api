import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
export const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password);

export const generateToken = (user) => {
    const token = jwt.sign({user}, 'userToken', {expiresIn: '1d'});
    return token;
}