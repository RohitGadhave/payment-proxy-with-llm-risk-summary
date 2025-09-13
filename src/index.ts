import { config } from './config/index';
import app from './server';

app.listen(config.port, () => {
  console.info(`Server running on http://localhost:${config.port}`);
});
