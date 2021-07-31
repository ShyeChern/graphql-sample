const userController = require('../users/user.controller');
const saleController = require('../sales/sale.controller');

/**
 * Resolver functions for schema fields
 * Query for read operations
 * Mutation for write operations
 */
module.exports = {
	Query: {
		users: userController.users,
		testError: userController.testError,
		sales: saleController.sales,
	},
	Mutation: {
		login: userController.login,
	},
};
