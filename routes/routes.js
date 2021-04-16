const { Router } = require('express');
const TimeController = require('../controllers/TimeController');
const routes = Router();

routes.get('/', (req,res) => {
    res.status(200).json({mensagem: "Hello World"})
});

routes.post('/time', TimeController.create);
routes.get('/times', TimeController.getAll);
routes.get('/time/:id', TimeController.getOne);

/* get, put, delete, update FIND */

module.exports = routes;