import express from 'express';
import fs from 'fs-extra';

const router = express.Router();
const file = './backend/data/notas.json';

router.get('/', async (req, res) => {
  const notas = await fs.readJson(file);
  res.json(notas);
});

router.post('/', async (req, res) => {
  const notas = await fs.readJson(file);
  const nova = { id: Date.now(), ...req.body };
  notas.push(nova);
  await fs.writeJson(file, notas);
  res.json(nova);
});

export default router;