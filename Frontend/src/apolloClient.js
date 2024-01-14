import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: "http://localhost:5000/" 
}); // our auth server ( from back )

const authLink = setContext((_, {headers}) => {
    return {
        headers : {
            ...headers,
            authorization: localStorage.getItem("token") || "" // where our token live in our auth ( we store it in the local storage )
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;  