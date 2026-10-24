const jwt = require("jsonwebtoken")

const jwtMiddleware = (req, res, next) => {
    console.log("inside jwtMiddleware")
    const token = req.headers.authorization.split(" ")[1]
    
    if (token) {

        try {
            const jwtresponse = jwt.verify(token, process.env.JWT_PASSWORD)
            req.payload = {id: jwtresponse.id, role: jwtresponse.role }
            next()

        } catch (error) {
            console.log(error);

        }

    }
    else {
        res.status(401).json("authorization failed")
    }
}

module.exports = jwtMiddleware