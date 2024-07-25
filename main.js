import fs from 'node:fs/promises';

import express from 'express';


import godoRouter from './routes/godo.js';

const server = express();
server.listen(8000);


server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./public'));

server.use('/', godoRouter);
