import express, { Request, Response } from 'express';
import taskRoutes from './routes/tasks';

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json()); // enable json parsing in req body
app.use('/pilotage', taskRoutes); //mount Task API Routes


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Pilotage Service Data Query Interface');
});
//start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

