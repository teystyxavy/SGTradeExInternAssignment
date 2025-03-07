import { Router, Request, Response } from 'express';
import { Data } from '../models/pilotage_data';

const router = Router();

let dataList: Data[] = [];

router.post('/', (req: Request, res: Response) => {
    const data: Data = {
        pilotage_imo: req.body.pilotage_imo,
        pilotage_cst_dt_time: req.body.pilotage_cst_dt_time,
        pilotage_end_dt_time: req.body.pilotage_end_dt_time,
        pilotage_loc_to_code: req.body.pilotage_loc_to_code,
        pilotage_snapshot_dt: req.body.pilotage_snapshot_dt,
        pilotage_loc_from_code: req.body.pilotage_loc_from_code,
        pilotage_start_dt_time: req.body.pilotage_start_dt_time,
        pilotage_arrival_dt_time: req.body.pilotage_arrival_dt_time,
        pilotage_onboard_dt_time: req.body.pilotage_onboard_dt_time,
    };

    dataList.push(data);
    res.status(201).json(data);
    });


router.get('/:id', (req: Request, res: Response) => {
    const list = dataList.filter((data) => data.pilotage_imo === parseInt(req.params.id));

    if (!list) {
        res.status(404).send('Task not found');
    } else {
        res.json(list);
    }
}); 

router.delete('/:id', (req: Request, res: Response) => {
    for (let i =0; i < dataList.length; i++) {
        if (dataList[i].pilotage_imo === parseInt(req.params.id)) {
            dataList.splice(i, 1);
        }
    }
    res.status(200).send('All Data with imo ' + req.params.id + ' deleted');
});

export default router;