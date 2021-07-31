const { MyError } = require('../utils/error');
const { users, sales } = require('../utils/data');

module.exports.users = async (parent, args, context, info) => {
	for (const user of users) {
		user.sales = sales.filter((value) => value.userId === user.id);
	}
	return users;
};

module.exports.login = async (parent, args, context, info) => {
	const { id } = args;
	const user = users.find((value) => value.id === id);
	if (!user) {
		throw new MyError(MyError.ERROR_2);
	}
	user.sales = sales.filter((value) => value.userId === id);
	return user;
};

module.exports.testError = async (parent, args, context, info) => {
	throw new MyError(MyError.ERROR_1);

	return 'OK';
};
