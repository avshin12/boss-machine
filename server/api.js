const express = require('express');
const minionsRouter = require('./apiMinions');
const apiRouter = express.Router();

//post get update delete poss bodyparse, morgan


apiRouter.use('/minions', minionsRouter);



module.exports = apiRouter;


// apiMinons.js