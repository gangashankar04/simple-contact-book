import express from 'express';
import cors from 'cors';
import path from 'path';
import { Router } from 'express';
import { getContacts, createContact, updateContact, deleteContact } from './controllers/contacts.controller';

const contactRoutes = Router();
contactRoutes.get('/', getContacts);
contactRoutes.post('/', createContact);
contactRoutes.put('/:id', updateContact);
contactRoutes.delete('/:id', deleteContact);


const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/contacts', contactRoutes);

app.get('*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

export default app;
