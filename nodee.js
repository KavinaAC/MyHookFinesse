// Import necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize express app
const app = express();
app.use(cors());  // Enable Cross-Origin Resource Sharing (CORS)
app.use(bodyParser.json());  // Middleware to parse incoming JSON data

// Serve static files from the current directory (root folder)
app.use(express.static(__dirname));  // Now images in the root folder are accessible

// Predefined responses for the chatbot
const responses = {
"crochet patterns": "We offer a variety of crochet patterns including granny squares, shawls, and blankets.",
"how to crochet": "To crochet, you'll need yarn and a hook. Start by making a slip knot and chain stitches.",
"shipping": "We offer worldwide shipping! Shipping times depend on your location.",
"order status": "Please provide your order ID to check the status.",
"yarn": "We recommend medium-weight yarn (like worsted weight) for beginners.",
"supplies": "We offer a variety of crochet supplies including hooks, stitch markers, and yarn. ",
"classes": "We offer both beginner and advanced crochet classes.",
"beginners": "If you're just starting, I recommend practicing with simple stitches like chain, single crochet, and double crochet.",
"crochet patterns for advanced": "We have more complex patterns like intricate lace shawls, cables, and multi-color designs. ",
"customization": "Many of our crochet patterns can be customized to fit your needs.",
"stitches": "There are many crochet stitches to learn, like the half-double crochet, treble crochet, and shell stitch. ",
"hooks": "We have a range of crochet hooks, including ergonomic ones for comfort.",
"tutorials": "We offer video tutorials on various crochet techniques, from basic to advanced.",
"communities": "Joining a crochet community is a great way to stay motivated and learn new techniques. ",
"refunds and exchanges": "We offer refunds and exchanges on most items. If there's an issue with your purchase, let us know, and we'll assist you with the process.",
"accessories": "Check out our selection of crochet accessories, including yarn bowls, bags, and measuring tapes.",
"patterns for gifts": "We have a great selection of crochet patterns for gifts like scarves, mittens, and baby blankets.",
"home decor": "Crochet home decor is a fun way to add personality to your space. Check out our patterns for pillows, rugs, and wall hangings.",
"charity": "Many crocheters use their skills to make items for charity.",
"inspiration": "If you need some crochet inspiration, check out our lookbook for beautiful projects from fellow crafters. ",
"designs": `
    Here are some beautiful crochet designs for you:
    <ul>
      <li><a href="/i1.jpg" target="_blank">Red Double Layer Crochet</a></li>
      <li><a href="/i2.jpg" target="_blank">Curve Design</a></li>
      <li><a href="/i3.jpg" target="_blank">Beaded Flowers</a></li>
      <li><a href="/i9.jpg" target="_blank">Ring Crochet</a></li>
    </ul>`,
  "default": "Sorry, I didn't quite understand that. Can you please rephrase?"
};

// Simple function to match user input with predefined intents (keyword matching)
function getResponse(userInput) {
  const userQuestion = userInput.toLowerCase().trim();
  console.log("User Input:", userQuestion);  // Debug log

  // Loop through all predefined responses and check if the user input contains any keyword from the responses
  for (let key in responses) {
    console.log("Checking keyword:", key);  // Log each keyword being checked
    if (userQuestion.includes(key)) {
      return responses[key];
    }
  }

  // Default response if no keyword match is found
  return responses["default"];
}

// Route to handle chatbot messages
app.post('/chat', (req, res) => {
  console.log("Received message:", req.body.message);  // Debug log
  const userMessage = req.body.message;  // Get the user input message
  const botResponse = getResponse(userMessage);  // Get response based on the input
  console.log("Bot response:", botResponse);  // Debug log
  res.json({ response: botResponse });  // Send back the response to the user
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Chatbot server running at http://localhost:${port}`);
});
