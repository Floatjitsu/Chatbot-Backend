const database = require('../modules/database');

exports.handler = async event => {
	const auftragsnummer = event.queryStringParameters.auftragsnummer;
	try {
		const result = await database.getAuftragStatus(auftragsnummer);
		return {
			statusCode: 200,
			body: JSON.stringify(result)
		}
	} catch (e) {
		return {
			statusCode: 404,
			body: JSON.stringify({foundAuftragsnummer: false})
		}
	}
};
