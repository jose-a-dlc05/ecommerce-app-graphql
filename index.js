const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { Query } = require('./resolvers/Query');
const { Product } = require('./resolvers/Product');
const { Category } = require('./resolvers/Category');

const server = new ApolloServer({
	typeDefs,
	resolvers: {
		Query,
		Product,
		Category,
	},
});

server.listen().then(({ url }) => {
	console.log('Server is listening on ' + url);
});
