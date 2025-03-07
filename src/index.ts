import express, { Request, Response } from 'express';
import taskRoutes from './routes/tasks';
import pool from './database/pool'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // enable json parsing in req body
app.use('/pilotage', taskRoutes); //mount Task API Routes

async function setupDatabase(){
    try {
    await pool.execute('CREATE TABLE IF NOT EXISTS pilotage' (
        pilotage_imo INT PRIMARY KEY,
        pilotage_cst_dt_time DATETIME,
        pilotage_end_dt_time DATETIME,
        pilotage_loc_to_code VARCHAR(50),
        pilotage_snapshot_dt DATETIME,
        pilotage_loc_from_code VARCHAR(50),
        pilotage_start_dt_time DATETIME,
        pilotage_arrival_dt_time DATETIME,  
        pilotage_onboard_dt_time DATETIME
    ));

    console.log('Database setup complete');
} catch (error) {
    console.error('Error setting up database', error);
}
}

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Pilotage Service Data Query Interface');
});
//start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

