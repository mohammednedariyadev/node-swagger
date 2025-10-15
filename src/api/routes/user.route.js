const express = require('express');
const router = express.Router();
const { getUsers, saveUser, getUserById, updateUserById, deleteUserById } = require('../controllers/user.controller')

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get all users
 *     tags: [User]
 *     description: Retrieve list of all users.
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Users List
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                  id:
 *                      type: string
 *                  username:
 *                      type: string
 *                  email:
 *                      type: string
 *                  firstName:
 *                      type: string
 *                  lastName:
 *                      type: string
 *                  isActive:
 *                      type: boolean
 *                  roles:
 *                      type: array
 *                      items:
 *                          type: string
 *                  lastLogin:
 *                      type: string
 *                      format: date-time
 */
/**
 * @swagger
 * /user:
 *   post:
 *     summary: Insert new user
 *     tags: [User]
 *     description: Insert new user.
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - username
 *                          - email
 *                          - firstName
 *                          - lastName
 *                          - isActive
 *                          - roles
 *                      properties:
 *                          username:
 *                              type: string
 *                          email:
 *                              type: string
 *                          firstName:
 *                              type: string
 *                          lastName:
 *                              type: string
 *                          isActive:
 *                              type: boolean
 *                          roles:
 *                              type: array
 *                              items:
 *                                  type: string
 *     responses:
 *       200:
 *         description:  User Saved Successfully
 *         content:
 *           application/json:
*             schema:
 *               type: object
 *               properties:
 *                  id:
 *                      type: string
 *                  username:
 *                      type: string
 *                  email:
 *                      type: string
 *                  firstName:
 *                      type: string
 *                  lastName:
 *                      type: string
 *                  isActive:
 *                      type: boolean
 *                  roles:
 *                      type: array
 *                      items:
 *                          type: string
 */
router
    .get('/', getUsers)
    .post('/', saveUser);

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get user by id
 *     description: Get user details by Id
 *     security:
 *      - bearerAuth: []
 *     tags: [User]
 *     produces:
 *      - application/json
 *     parameters:
 *      - name: id
 *        description: User id
 *        in: path
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: User Details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  id:
 *                      type: string
 *                  username:
 *                      type: string
 *                  email:
 *                      type: string
 *                  firstName:
 *                      type: string
 *                  lastName:
 *                      type: string
 *                  isActive:
 *                      type: boolean
 *                  roles:
 *                      type: array
 *                      items:
 *                          type: string
 *                  lastLogin:
 *                      type: string
 *                      format: date-time
 */
/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Update user by id
 *     description: Update user details by Id
 *     security:
 *      - bearerAuth: []
 *     tags: [User]
 *     produces:
 *      - application/json
 *     parameters:
 *      - name: id
 *        description: User id
 *        in: path
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: User Details Updated Successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  id:
 *                      type: string
 *                  username:
 *                      type: string
 *                  email:
 *                      type: string
 *                  firstName:
 *                      type: string
 *                  lastName:
 *                      type: string
 *                  isActive:
 *                      type: boolean
 *                  roles:
 *                      type: array
 *                      items:
 *                          type: string
 *                  lastLogin:
 *                      type: string
 *                      format: date-time
 */
/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Delete user by id
 *     description: Delete user details by Id
 *     security:
 *      - bearerAuth: []
 *     tags: [User]
 *     produces:
 *      - application/json
 *     parameters:
 *      - name: id
 *        description: User id
 *        in: path
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: User Details Deleted Successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  id:
 *                      type: string
 *                  username:
 *                      type: string
 *                  email:
 *                      type: string
 *                  firstName:
 *                      type: string
 *                  lastName:
 *                      type: string
 *                  isActive:
 *                      type: boolean
 *                  roles:
 *                      type: array
 *                      items:
 *                          type: string
 *                  lastLogin:
 *                      type: string
 *                      format: date-time
 */
router
    .get('/:id', getUserById)
    .put('/:id', updateUserById)
    .delete('/:id', deleteUserById)

module.exports = router;
