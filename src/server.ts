import express from 'express';
import path from 'path';

import { getPath } from './utils/utils';
import { apiRouter } from './routes/index.route';
import { serverlessBodyParse } from './middlewares/index.middlewares';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(serverlessBodyParse);

app.use(express.static(getPath('src/public/')));

app.get('static', (req, res) => {
  res.sendFile(path.join(getPath('src/public/www'), 'index.html'));
});
app.use('/api', apiRouter);

export default app;
