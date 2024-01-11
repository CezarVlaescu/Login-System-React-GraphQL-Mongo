const { ApolloError } = require('apollo-server');
const User = require('../../models/User');
const bycrypt = require("bcryptjs");
const JWT = require('jsonwebtoken');

module.exports = {
    Mutation: {
        async registerUser(_, {registerInput: {username, email, password} }) {
            
            // See if an old user already exists

            const oldUser = await User.findOne({username: username});

            // If true throw an error

            if(oldUser) throw new ApolloError("A user already exists with the email" + email, 'USER_ALREADY_EXISTS');

            // Encrypt the password

            var encryptedPassword = await bycrypt.hash(password, 10);

            // Build out moongose model

            const newUser = new User({
                username: username,
                email: email,
                password: encryptedPassword
            });

            // Create our JWT token (attatch to our User model)

            const token = JWT.sign(
            { _id: newUser._id, email }, 
            "UNSAFE_STRING",
            {
                expiresIn: "2h"
            });

            newUser.token = token;

            // Save user in the database
            
            const res = await newUser.save();
            
            return {
                id: res.id,
              ...res._doc
            }

        },
        async loginUser(_, {loginInput: {username, password}}) {
            
            // See if user already exists

            const user = await User.findOne({username});

            // Check if the entered password equals the encrypted password

            if (user && (await bycrypt.compare(password, user.password))){
                // Create JWT token 
                
                const token = JWT.sign(
                { _id: user._id, email: user.email }, 
                "UNSAFE_STRING",
                {
                    expiresIn: "2h"
                })

                // Attach token to user model that we found above

                 user.token = token;

                 return {
                   id: user.id,
                   ...user._doc
                }
            } else {               
                // If user not exists throw an error
                throw new ApolloError("Invalid password", 'INVALID_CREDENTIALS');
            }
        }
    },
    Query: {
        user: (_, {ID}) => User.findById(ID)
    }
}