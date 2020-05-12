const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccount.json');

admin.initializeApp({
  	credential: admin.credential.cert(serviceAccount),
  	databaseURL: "https://chatbot-database-dc942.firebaseio.com"
});

const db = admin.database();
const ref = db.ref('auftraege');

exports.handler = async event => {
	ref.on('value', (snapshot) => {
		console.log(snapshot.val());
	}, (error) => {
		console.log('The read failed: ' + error.code);
	});
	const subject = event.queryStringParameters.name || 'World';
	console.log('Hello World!');
	return {
		statusCode: 200,
		body: `Hello ${subject}!`
	}
}
