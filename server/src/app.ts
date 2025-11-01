import express from 'express';
import cors from 'cors';
import path from 'path';
import contactRoutes from './routes/contacts.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/contacts', contactRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

export default app;
