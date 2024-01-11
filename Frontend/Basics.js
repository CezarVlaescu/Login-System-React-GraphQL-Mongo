// Start with GraphQL

// GraphQL is a Query Language, an alternative to use REST API

// REST API : https://github.com/api/repo
//            https://github.com/api/repo/REST-API
// Problems : Overfetching -> getting more data than we need
//            Underfetching -> getting less data than we need

// GraphQL : single endpoint : mysite.com/endpoint -> sends back a Query {
    //     users {
    //         id
    //         name
    //         title
    //     }
// }

// Apollo service : Postman version for GraphQL

// Operations : 

// query ReviewsQuery {
    //     reviews {
    //         id -> gets id
    //         author {
    //             id -> gets author id
    //             name -> gets author name
    //             title -> gets author title
    //         }
    //     }
//}

// query {
    //game(id: "2"){
        //    id
        //    name { id }
        //    title
        // 
    // }
// }