const express = require('express');
const { ModuleFilenameHelpers } = require('webpack');

const minionsRouter = express.Router;
//require any relevate ____ from database 


const {getAllFromDatabase, getFromDatabaseById, 
    addToDatabase, updateInstanceInDatabase, 
    deleteFromDatabasebyId, deleteAllFromDatabase} = require('./db');

// const app = require('../server');



minionsRouter.get('./minions', (req, res, next) => {
    const allMinions = getAllFromDatabase('minions');
    //async check
    if (allMinions) {
        res.send(allMinions);
    } else {
        console.log(`something went wrong`);
    }
});

minionsRouter.post('./minions', (req, res, next) => {
    const newMinion = []
    addToDatabase(req.queary)
}
)

module.exports = minionsRouter;