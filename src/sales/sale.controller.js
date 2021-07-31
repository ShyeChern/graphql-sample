const { MyError } = require('../utils/error');
const { sales } = require('../utils/data');

module.exports.sales = async (parent, args, context, info) => {
	return sales;
};
