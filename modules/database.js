const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccount.json');

if (!admin.apps.length) {
    admin.initializeApp({
      	credential: admin.credential.cert(serviceAccount),
      	databaseURL: "https://chatbot-database-dc942.firebaseio.com"
    });
}

const db = admin.database();
const ref = db.ref('auftraege');

const getAnschlussadresse = auftragsnummer => {
    return new Promise((resolve, reject) => {
        db.ref('auftraege/' + auftragsnummer).once('value').then(snapshot => {
            resolve(snapshot.val().anschlussadresse);
        }).catch(error => {
            reject(error);
        });
    });
};

module.exports = {getAnschlussadresse};
