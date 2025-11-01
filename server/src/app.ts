import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose, { Schema, Document } from 'mongoose';

// Contact Model
interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
}

const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true }
}, { timestamps: true });

const Contact = mongoose.model<IContact>('Contact', ContactSchema);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Contact routes
app.get('/api/contacts', async (req: express.Request, res: express.Response) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/contacts', async (req: express.Request, res: express.Response) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

app.put('/api/contacts/:id', async (req: express.Request, res: express.Response) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json(contact);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

app.delete('/api/contacts/:id', async (req: express.Request, res: express.Response) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Contact deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

export default app;

