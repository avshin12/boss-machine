const express = require('express');
const minionsRouter = express.Router();
//require any relevate ____ from database  

const {getAllFromDatabase, getFromDatabaseById, 
    addToDatabase, updateInstanceInDatabase, 
    deleteFromDatabasebyId, deleteAllFromDatabase} = require('./db');


minionsRouter.get('/', (req, res, next) => {
    console.log('ping')
    const allMinions = getAllFromDatabase('minions');
    //async check
    if (allMinions) {
        res.send(allMinions);
    } else {
        console.log(`something went wrong`);
    }
});
/*
const addToDatabase = (modelType, instance) => {
    const model = findDataArrayByName(modelType);
    if (model === null) {
      return null;
    }
    if (model.isValid(instance)) {
      instance.id = `${model.nextId++}`;
      model.data.push(instance);
      return model.data[model.data.length - 1];
    }
  }   <--- This is the method as defined in db.js
*/

// addToDatabase takes a model type ('minion') and an instace (object)
minionsRouter.post('/', (req, res, next) => {
    newMinion = {};
    newMinion.name = req.body.name;
    newMinion.title = req.body.title;
    newMinion.salary = req.body.salary;
    minion = addToDatabase('minion', newMinion);
    if (minion) {
        res.send(minion);
    } else {
        res.status(500).send() // <-- this might be the wrong status code (don't remember)
    }
})

module.exports = minionsRouter;