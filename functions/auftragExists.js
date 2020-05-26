const database = require('../modules/database');

exports.handler = async event => {
	const auftragsnummer = event.queryStringParameters.auftragsnummer;
	const result = await database.auftragExists(auftragsnummer);

	let returnedData = {
		body: JSON.stringify(result)
	}

	if (!result.auftragExists) {
		returnedData.statusCode = 404;
	} else {
		returnedData.statusCode = 200;
	}

	return returnedData;
};
