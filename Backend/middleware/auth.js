import { AuthenticationError } from "apollo-server-errors";

const Jwt = require("jsonwebtoken");

module.exports = (context) => {
    // context = { ...headers }
    const authHeader = context.req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split("Bearer")[1]; // spliting from bearer to see the token after

        if(token){
            try {
                const decoded = Jwt.verify(token, "UNSAFE_STRING");
                return decoded;
            } catch (error) {
                throw new AuthenticationError("Invalid token");
            }
        }

        throw new Error("Authentication token must be 'Bearer [token]");
    }

    throw new Error("Authentication header must be provided");
    
}