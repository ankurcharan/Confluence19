const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');



var config = {
    apiKey: "AIzaSyD11bvvf7jgLETdABLIm4WDHX1eB8Z3m9g",
    authDomain: "confluence19.firebaseapp.com",
    databaseURL: "https://confluence19.firebaseio.com",
    projectId: "confluence19",
    storageBucket: "confluence19.appspot.com",
    messagingSenderId: "950391973459"
  };



// initialize default app
admin.initializeApp(functions.config().firebase);

// database reference
const db = admin.firestore();
db.settings({timestampsInSnapshots:true});

// express app
const app = express();

// ROUTES
const apiRoutes = require('./routes');

// body-parser
app.use(bodyParser.urlencoded({extended:false}));
// cors
app.use(cors({ origin: true }));


// api routes
app.use('/ccsscscscsc', (req, res) => {

    res.send("saaasasasasds");
})

app.use('/', apiRoutes);

// EXPORT Functions
exports.api = functions.https.onRequest(app);