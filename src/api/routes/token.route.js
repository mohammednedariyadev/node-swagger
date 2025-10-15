const express = require('express');
const router = express.Router();
const { getToken } = require('../controllers/token.controller');
/**
 * @swagger
 * /auth/token:
 *   post:
 *     summary: Authenticate user and get a JWT token
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: A JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: The JWT access token.
 *                 type:
 *                   type: string
 *                   description: Bearer
 *                      
 *       401:
 *         description: Invalid credentials
 */
router
    .post('/token', getToken);

module.exports = router;