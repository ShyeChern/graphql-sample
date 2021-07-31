const { ApolloError } = require('apollo-server-express');

const ErrorMessage = {
	1001: 'This is error message 1',
	1002: 'This is error message 2',
	9999: 'Unexpected error occured. Please check with the network administrator',
};

/**
 * Stacktrace will be removed in production automatically
 */
class MyError extends ApolloError {
	constructor(errorCode, error = {}) {
		if (process.env.NODE_ENV === 'production') {
			super(ErrorMessage[errorCode], errorCode);
		} else {
			// additional data
			super(ErrorMessage[errorCode], errorCode, { originalError: error });
		}
	}
}

MyError.ERROR_1 = 1001;
MyError.ERROR_2 = 1002;
MyError.UNKNOWN_ERROR = 9999;

module.exports = {
	MyError,
};
