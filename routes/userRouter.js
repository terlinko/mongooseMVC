const express = require('express')
const router = express.Router();
const userController = require('../controller/userController')
const bodybody = require('../middleware/bodybody')

router.get('/', userController.get);
router.post('/', userController.post);
router.get('/:userSeq', userController.getSeq);
router.delete('/:userSeq', userController.deleteSeq);
router.patch('/:userSeq', userController.updateSeq);

module.exports = router