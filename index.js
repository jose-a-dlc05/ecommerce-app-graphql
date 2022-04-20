const { ApolloServer, gql } = require('apollo-server');

// defines how our query is going to look
const typeDefs = gql`
	type Query {
		hello: String
		math: Int
	}
`;

// function that returns the string
const resolvers = {
	Query: {
		hello: () => {
			return 'World!!!!';
		},
		math: () => {
			return 2 + 2;
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen().then(({ url }) => {
	console.log('Server is ready at ' + url);
});

// Schema aka type definition
// the way our data is going to look
// i.e. fruits: [String]
// Scalar types are primitive data types that can story only a single value.
// In GraphQL, the default scalar types are:
// Int
// Float
// String
// Boolean
// ID

// Resolver
// functions that return the data conforming to the way we specify in schema
// fruits: () => {
// return ['banana', 'apple']
//}

// Apollo Server is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client. It's the best way to build a production-ready, self-documenting GraphQL API that can use data from any source.
