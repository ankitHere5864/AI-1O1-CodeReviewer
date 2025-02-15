const express = require('express');
const aiController = require("../controllers/ai.controller")

const router = express.Router();


router.post("/get-review", aiController.getReview)


module.exports = router;       

// const aiService = require('../services/ai.service');

// router.post('/generate-content', async (req, res) => {
//     try {
//         const prompt = req.body.prompt;
//         const generatedContent = await aiService.generateContent(prompt);
//         res.json({ generatedContent });
//     } catch (error) {
//         console.error('Error generating content:', error);
//         res.status(500).json({ error: 'Failed to generate content' });
//     }
// });
 