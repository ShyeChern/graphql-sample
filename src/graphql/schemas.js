const { gql } = require('apollo-server-express');

/**
 * Construct a schema, using GraphQL schema language
 */

module.exports = gql`
	type Query {
		users: [User]
		sales: [Sale]
		testError: String
	}

	# I can comment something here
	type Mutation {
		login(id: Int!): User
	}

	type User {
		id: Int!
		name: String!
		sales: [Sale!]!
	}

	type Sale {
		id: Int!
		userId: Int!
		package: String!
		date: String!
		attachment: String
	}
`;
