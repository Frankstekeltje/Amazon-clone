const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51Lo3LmGHDM9WFjby9wAx59CeWZ8k4tB1TAxFWxOkcUABXCM6ox5pwAdnSV6U0xeHotUzC3toTD6iveRCigU5gJtq00mecPMGbE');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment request recieved BOOOM!!! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // OK - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

});


// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-89aa0/us-central1/api