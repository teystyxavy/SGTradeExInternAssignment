import { Router, Request, Response } from 'express';
import { Data } from '../models/pilotage_data';

const router = Router();

const validIMOs = [9000003, 9000015, 9000027, 9000039, 9000041, 9000053, 9000065, 9000077, 9000089, 9000091];
const IMONames = ["HarborGuard Pilotage", "True North Navigators", "Seafarer Pilot Solutions", "Waypoint Maritime Services", 
                    "AeroNaut Pilotage", "Guiding Star Pilotage", "CompassEdge Pilot Services", "Safe Passage Navigators",
                    "Blue Horizon Pilotage", "PortMaster Guidance"];

const generateRandomDate = (): Date => {
    const start = new Date();
    const end = new Date();
    end.setDate(start.getDate() + Math.floor(Math.random() * 30));
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

let dataList: Data[] = [];

for (let i = 0; i < 100; i++) {
    dataList.push({
        pilotage_name: IMONames[i % IMONames.length],
        pilotage_imo: validIMOs[i % validIMOs.length],
        pilotage_cst_dt_time: generateRandomDate(),
        pilotage_end_dt_time: generateRandomDate(),
        pilotage_loc_to_code: "NYC",
        pilotage_snapshot_dt: generateRandomDate(),
        pilotage_loc_from_code: "LON",
        pilotage_start_dt_time: generateRandomDate(),
        pilotage_arrival_dt_time: generateRandomDate(),
        pilotage_onboard_dt_time: generateRandomDate()
    });
}

const validateIMO = (imo: string): boolean => {
    // IMO should be 7 digits
    if (!/^\d{7}$/.test(imo)) {
        return false;
    }
    
    // Calculate checksum
    let sum = 0;
    for (let i = 0; i < 6; i++) {
        sum += parseInt(imo[i]) * (7 - i);
    }
    
    // The last digit is the check digit
    const checkDigit = parseInt(imo[6]);
    const calculatedCheckDigit = sum % 10;
    
    // Validate checksum
    if (checkDigit !== calculatedCheckDigit) {
        return false;
    }
    
    return true;
};

router.post('/', (req: Request, res: Response) => {
    const data: Data = {
        pilotage_name: req.body.pilotage_name,
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
    if (!validateIMO(req.params.id)) {
        res.status(400).send('Unable to retrieve pilotage information, vessel IMO is invalid');
    }
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