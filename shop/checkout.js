// This is your test secret API key.
const stripe = Stripe("pk_test_51PwrPRJv39207MCCJs32bIUfvuwSZlvwbwVrecZ6LG9JOMLdH31DSDDguaxnhYARaqXDTEXVi5d29YUPPTal4zSe00ArzTDKjL");

initialize();

// Create a Checkout Session
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}