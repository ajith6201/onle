const express = require('express');
const router = express.Router();
const roomController = require('../app/api/controllers/rooms');

router.get('/', roomController.getAll);
router.post('/', roomController.create);
router.get('/:roomId', roomController.getById);
router.put('/:roomId', roomController.updateById);
router.delete('/:roomId', roomController.deleteById);

module.exports = router;