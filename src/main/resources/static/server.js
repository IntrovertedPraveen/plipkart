const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve static HTML files

// Twilio Config
const accountSid = "";
const authToken = "";
const client = new twilio(accountSid, authToken);

app.post("/send-sms", (req, res) => {
  client.messages
    .create({
      body: "Your order has been confirmed! ✅ Thank you for shopping with us.",
      from: "",
      to: "+919500936522"
    })
    .then(message => res.send("SMS Sent Successfully"))
    .catch(err => res.status(500).send(err));
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
