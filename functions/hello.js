const database = require('../modules/database');

exports.handler = async event => {
	let result = await database.testCall;
	const subject = event.queryStringParameters.name || 'World';
	console.log(result);
	return {
		statusCode: 200,
		body: 'Result: ' + result
	}
}
