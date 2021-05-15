const {Animal} = require('./../models');

module.exports.createAnimal = async (req, res, next) => {
    const {body} = req;
    const animalInstance = new Animal(body);
    try{
        const createdAnimal = await animalInstance.save();
        if(createdAnimal) {
            return res.status(201).send({data: createdAnimal});
        }
        res.status(400).send('Bad request');
    } catch (err) {
        next(err);
    }
}

module.exports.getAnimal = async (req, res, next) => {
    const {params: {animalId}} = req;
    try{
        const findingAnimal = await Animal.findById(animalId).exec();
        if(findingAnimal) {
            return res.status(201).send({data: findingAnimal});
        }
        res.status(400).send('Bad request');
    } catch (err) {
        next(err);
    }
}

module.exports.getAllAnimal = async (req, res, next) => {
    try{
        const findingAllAnimals= await Animal.find({}).exec();
        if(findingAllAnimals) {
            return res.status(201).send({data: findingAllAnimals});
        //console.log('finding animals' findingAllAnimals);
        }
        res.status(400).send('Bad request');
    } catch (err) {
        next(err);
    }
}



module.exports.updateAnimal = async (req, res, next) => {
        const {body, params: {animalId}} = req;
    try{
        const updatedAnimal = await Animal.findByOdAndUpdate(animalId, body).exec();
        //findByOdAndUpdate(animalId, body) add options new: true ??!
        if(updatedAnimal) {
            return res.status(201).send({data: updatingAnimal});
        }
        res.status(400).send('Bad request');
    } catch (err) {
        next(err);
    }
}

module.exports.deleteAnimal = async (req, res, next) => {
       const {params: {animalId}} = req;
    try{
        const deletedAnimal = await Animal.findByIdAndDelete(animalId).exec();
        if(deletedAnimal) {
            return res.status(201).send('Deleted!');
        }
        res.status(400).send('Not found');
    } catch (err) {
        next(err);
    }
}