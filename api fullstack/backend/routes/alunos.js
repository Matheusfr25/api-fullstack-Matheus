import express from 'express';
import fs from 'fs-extra';

const router = express.Router();
const file = './backend/data/alunos.json';

router.get('/', async (req, res) => {
  const alunos = await fs.readJson(file);
  res.json(alunos);
});

router.post('/', async (req, res) => {
  const alunos = await fs.readJson(file);
  const novo = { id: Date.now(), ...req.body };
  alunos.push(novo);
  await fs.writeJson(file, alunos);
  res.json(novo);
});

router.delete('/:id', async (req, res) => {
  let alunos = await fs.readJson(file);
  alunos = alunos.filter(a => a.id != req.params.id);
  await fs.writeJson(file, alunos);
  res.json({ msg: "Removido" });
});

export default router;