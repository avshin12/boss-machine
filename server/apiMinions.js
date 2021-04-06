const express = require('express');
<<<<<<< HEAD
const minionsRouter = express.Router();
//require any relevate ____ from database  
=======
//const { ModuleFilenameHelpers } = require('webpack');

const minionsRouter = express.Router;
<<<<<<<< HEAD:server/apiMinions.js
//require any relevate ____ from database 

========
//require any relevate ____ from database  
>>>>>>>> main:apiMinions.js
>>>>>>> main

const {getAllFromDatabase, getFromDatabaseById, 
    addToDatabase, updateInstanceInDatabase, 
    deleteFromDatabasebyId, deleteAllFromDatabase} = require('./db');

<<<<<<< HEAD

minionsRouter.get('/', (req, res, next) => {
    console.log('ping')
=======
<<<<<<<< HEAD:server/apiMinions.js
// const app = require('../server');


========
>>>>>>>> main:apiMinions.js

minionsRouter.get('./minions', (req, res, next) => {
>>>>>>> main
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
<<<<<<< HEAD
minionsRouter.post('/', (req, res, next) => {
=======
minionsRouter.post('./minions', (req, res, next) => {
>>>>>>> main
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