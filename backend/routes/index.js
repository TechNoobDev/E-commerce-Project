const express = require('express');
const router = express.Router();

// Define API routes here
router.get('/api/example', (req, res) => {
    res.json({ message: 'This is an example response from the backend!' });
});

// Export the router
module.exports = router;