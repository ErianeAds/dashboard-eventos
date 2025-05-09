const express = require('express');
const router = express.Router();
const eventosController = require('../controllers/eventosController');
const authMiddleware = require('../middleware/auth');

// Rotas de eventos (proteção com JWT)
router.post('/', authMiddleware, eventosController.createEvento);
router.get('/', eventosController.getAllEventos);
router.get('/:id', eventosController.getEventoById);
router.put('/:id', authMiddleware, eventosController.updateEvento);
router.delete('/:id', authMiddleware, eventosController.deleteEvento);

module.exports = router;
