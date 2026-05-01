import express from 'express';
import cors from 'cors';

import alunosRoutes from './routes/alunos.js';
import notasRoutes from './routes/notas.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/alunos', alunosRoutes);
app.use('/notas', notasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});