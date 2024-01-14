const { gql } = require('apollo-server');

module.exports = gql`
type User {
    username: String
    email: String
    password: String
    token: String
}

type Query {
    user(id: ID!): User
}

input RegisterInput { 
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
}

input LoginInput {
    username: String!
    password: String!
}

type Mutation {
    registerUser(registerInput: RegisterInput) : User 
    loginUser(loginInput: LoginInput): User
}`