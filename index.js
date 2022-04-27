const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { Query } = require('./resolvers/Query');
const { Mutation } = require('./resolvers/Mutation');
const { Product } = require('./resolvers/Product');
const { Category } = require('./resolvers/Category');
const { db } = require('./db');

const server = new ApolloServer({
	typeDefs,
	resolvers: {
		Query,
		Product,
		Category,
		Mutation,
	},
	context: {
		db,
	},
});

server.listen().then(({ url }) => {
	console.log('Server is listening on ' + url);
});
