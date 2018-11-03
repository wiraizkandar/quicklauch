const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', UsersController.index);
router.post('/store', UsersController.store);
router.get('/show', UsersController.show);
router.get('/show/:id', UsersController.getUserByID);
router.delete('/:id', UsersController.delete);
router.put('/:id/update', UsersController.update);

module.exports = router;