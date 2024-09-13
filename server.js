const Stripe = require('stripe');
const stripe = Stripe('sk_test_51PwrPRJv39207MCCxNVqXmzPSyMZFbNaY3KXsLQoggWgyxgGdf8u6LTClC1flRgVfWOLlmAWzCnFaaWOKWduminI00MH1xIo9N');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.static('shop'));

// Use this instead of app.use(cors());
app.use(cors({
  origin: 'http://127.0.0.1:5500' // Allow requests from this origin
}));

const YOUR_DOMAIN = 'http://localhost:5500';

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/shop/shop.html')
});

app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            line_items: [
              {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1Py1wNJv39207MCCP0OzqBdt',
                quantity: 1,
              },
            ],
            mode: 'payment',
            return_url: `${YOUR_DOMAIN}/return.html?session_id={CHECKOUT_SESSION_ID}`,
          });
          console.log("Session created");
        
          res.send({clientSecret: session.client_secret});
    } catch (error) {
        console.error('Error creating session:', error); // Add this to catch any errors
        res.status(500).send({ error: 'Failed to create checkout session' });
    }
  
});

// Endpoint to receive checkout session status
app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
});

app.listen(3000, () => console.log('Running on port 3000'));
