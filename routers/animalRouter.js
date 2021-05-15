const {Router} = require('express');
const {animalController} = require('../controllers');
const animalRouter = new Router();

animalRouter.post('/', animalController.createAnimal);


animalRouter.get('/', animalController.getAllAnimal);

animalRouter
.route('./:animalId')
.get(animalController.getAnimal)
.patch(animalController.updateAnimal)
.delete(animalController.deleteAnimal);

module.exports = animalRouter;