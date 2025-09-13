import { Router } from 'express';
import { ping } from '../controllers/monitor.controller';
const router = Router();

router.get('/ping', ping);
router.get('/hello', (req, res) =>
  res.send(`
        <html>
            <body>
                <h1>Send Data to Server</h1>
                <form action="/hello" method="POST">
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" name="name" required />
                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>
    `)
);
router.post('/hello', (req: any, res) => {
  res.json({
    message: 'Hello World!',
    body: req.body,
    apiGateway: req?.apiGateway?.event?.body,
  });
});
export default router;
