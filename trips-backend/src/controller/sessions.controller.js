

const register = (req, res) => {
    res.send({status: 'success', message: 'User registered', user: req.user});
}

const login = (req, res) => {
    res.cookie('loginCookie', req.user, {httpOnly: true})
        .status(200)
        .send({message: 'Cookie set', jwt: req.user});
}

const current = (req, res) => {
    console.log("El user es " + JSON.stringify(req.user))
    res.status(200).send(req.user);
}

export default {
    register,
    login,
    current
}