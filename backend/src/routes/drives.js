import { Router } from 'express';
import Drive from '../models/Drive.js';
import DriveLog from '../models/DriveLog.js';
const router = Router();

router.get('/', async (req, res) => {
  const { location, role, from, to } = req.query;
  const q = {};
  if (location) q.location = location;
  if (role) q.role = role;
  if (from || to) q.dateTime = { ...(from && { $gte: new Date(from) }), ...(to && { $lte: new Date(to) }) };
  const data = await Drive.find(q).sort({ dateTime: 1 });
  res.json(data);
});

router.post('/', async (req, res) => {
  const drive = await Drive.create(req.body);
  res.status(201).json(drive);
});

router.post('/:driveId/logs', async (req, res) => {
  const log = await DriveLog.create({ ...req.body, driveId: req.params.driveId });
  res.status(201).json(log);
});

export default router;