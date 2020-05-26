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

const getAnschlussadresse = async auftragsnummer => {
    try {
        const result = await db.ref('auftraege/' + auftragsnummer).once('value');
        return {
            anschlussadresse: await result.val().anschlussadresse,
            foundAuftragsnummer: true
        }
    } catch (e) {
        throw new Error(e);
    }
};

const getAuftragStatus = async auftragsnummer => {
    try {
        const result = await db.ref('auftraege/' + auftragsnummer).once('value');
        return {
            status: result.val().status,
            foundAuftragsnummer: true
        }
    } catch (e) {
        throw new Error(e);
    }
};

const getAuftragsdaten = async auftragsnummer => {
    try {
        const result = await db.ref('auftraege/' + auftragsnummer).once('value');
        return {
            auftragsdaten: await result.val().auftragsdaten,
            foundAuftragsnummer: true
        }
    } catch (e) {
        throw new Error(e);
    }
};

const auftragExists = async auftragsnummer => {
    const result = await db.ref('auftraege/' + auftragsnummer).once('value');
    if (!result.val()) {
        return {
            auftragExists: false
        }
    }
    return {
        auftragExists: true
    }
};

module.exports = {getAnschlussadresse, getAuftragStatus, getAuftragsdaten, auftragExists};
