require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const PORT = process.env.PORT || 4000;
const { MyError } = require('./src/utils/error');
const resolvers = require('./src/graphql/resolvers');
const typeDefs = require('./src/graphql/schemas');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function startServer() {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		context: async ({ req, res }) => {
			return { req, res };
		},
		formatError: (err) => {
			if (err.originalError.name !== 'Error') {
				return new MyError(MyError.UNKNOWN_ERROR, err);
			}
			return err;
		},
	});

	await server.start();

	// By default, ApolloServer hosts its GraphQL at /graphql endpoint
	const path = '/api';
	server.applyMiddleware({ app, path });
	await new Promise((resolve) => app.listen({ port: PORT }, resolve));
	console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
	return { server, app };
}

startServer();
