import jwt from 'jsonwebtoken'
export function authenticateToken(req, res, next) {
    const token = req.cookies.token
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.s(403).json({ message: "Token is not valid!" })
        if (user.role === "admin") return next()
        else if (req.query.email === user.email) return next()
        else {
            res.status(405).json({ msg: 'Request invalid' })
        }
    })
}


export function adminAccess(req, res, next) {
    const token = req.cookies.token
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.s(403).json({ message: "Token is not valid!" })
        if (user.role === "admin") return next()
        res.status(403).json({ message: "you cannot perform this operation" })
    })
}

