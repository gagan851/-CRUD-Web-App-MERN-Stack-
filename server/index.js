import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from './routes/userRoute.js'; // 👈 नाम meaningful बनाया

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

// ✅ Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// ✅ Routes
app.use('/api', userRoute);

// ✅ Database Connection
mongoose.connect(MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});
