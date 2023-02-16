import jwt from 'jsonwebtoken';


const verifyToken = (req: any, res: any, next: any) => {
    if (req.headers.authorization || (req.headers.cookie && req.headers.cookie.indexOf('token=') > -1)) {
        let token = req.headers.authorization || req.headers.cookie.split('token=')[1]
        if (!token) {
            return res.status(403).send({ message: "No token provided!" });
        }

        let secret:string = process.env.JWT_SECRET as string;
        
        token = token.includes(';')? token.split(';')[0] : token
        token = JSON.parse(token)

        jwt.verify(token, secret, (err: any, decoded: any) => {
            console.log(err);
            if (err) {
                return res.status(401).send({ message: "Unauthorized!" });
            }
            req.userId = decoded.id;
            next();
        });
    } else {
        return res.sendStatus(403).send({ message: "No token provided!" });
    }
};

const authJwt = {
    verifyToken,
};

export default authJwt;