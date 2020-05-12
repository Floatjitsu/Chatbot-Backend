const database = require('../modules/database');

exports.handler = async event => {
	const subject = event.queryStringParameters.auftragsnummer || 'World';
	console.log(subject);
	let result = await database.getAnschlussadresse(subject);
	console.log(result);
	return {
		statusCode: 200,
		body: 'Result: ' + result
	}
}
