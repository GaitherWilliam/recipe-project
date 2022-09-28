// Imports
const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./src/lib/config');
const serviceAccount = require('./src/lib/serviceAccount.json');

// JSON To Firestore
const jsonToFirestore = async () => {
    try {
        console.log('Initializing Firebase');
        var admin = require("firebase-admin");
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: firebaseConfig.databaseURL
        });
        console.log('Firebase initialized');
        await firestoreService.restore('./src/lib/recipes.json');
        console.log('Upload Success');
    }
    catch (error) {
        console.log(error);
    }
};
jsonToFirestore();